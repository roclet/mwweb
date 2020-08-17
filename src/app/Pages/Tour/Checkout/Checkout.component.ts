import { Component, OnInit } from '@angular/core';
import { PaymentDetails } from '../../../Shared/Model/PaymentModel/PaymentDetails';
import { ReferenceDetails } from '../../../Shared/Model/PaymentModel/ReferenceDetails';
import { RedirectUrls } from '../../../Shared/Model/PaymentModel/RedirectUrls';
import { PaymentParam } from '../../../Shared/Model/PaymentModel/PaymentParam';
import { TableModel } from '../../../Shared/Model/TableModel';
import { PostJsonDataModel } from '../../../Shared/Model/PostJsonData.model';
import { TourService } from '../../../Services/Tour.service';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, FormArray, NgForm, Validators} from '@angular/forms';
import {ToastaService, ToastaConfig, ToastOptions, ToastData} from 'ngx-toasta';
import { HttpClient } from '@angular/common/http';
import { DialogService } from '../../../Services/DialogService';
import { databaseConfig, PayFastAPI } from '../../../Core/Server/Server.config';
import { BookingInvoiceModel } from '../../../Shared/Model/BookingInvoice.model';
import { MainBookingModel } from '../../../Shared/Model/MainBooking.model';
import { NewBookingModel } from '../../../Shared/Model/NewBooking.model';
import { BookingTravelerModel } from 'src/app/Shared/Model/BookingTraveler.model';
// import { UUID } from 'angular2-uuid';
@Component({
  selector: 'app-checkout',
  templateUrl: './Checkout.component.html',
  styleUrls: ['./Checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  tourList = [];
  totalAmount = 0;
  acceptTerm;
  validate = true;
  acceptPromotinal;
  return_url;
  cancel_url;
  notify_url;
  tourCarBookForm: FormGroup;
  emailPattern: any = /\S+@\S+\.\S+/;
  merchant_id: string;
  merchant_key: string;
  private url: string;
  payment_details = new PaymentDetails();
  reference_details = new ReferenceDetails();
  redirect_urls = new RedirectUrls();
  paymentparam = new PaymentParam();
  public tableData = new TableModel();
  NumberOfTravellers: number;
  datain = new PostJsonDataModel();
  dynamicForm: FormGroup;
  submitted = false;

  constructor(
    private serviceT: TourService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastyService: ToastaService,
    private http: HttpClient,
    private dial: DialogService
  ) { }

  ngOnInit() {
    this.serviceT.calculateLocalCartProdCounts();
    this.tourList = this.serviceT.localStorageCartProducts;
    this.getGlobalTotalCart();
    this.NumberOfTravellers = Number(this.totPeople());

    // Form building
    this.tourCarBookForm = this.formBuilder.group({
      Ltfirstname: ['', Validators.required],
      Ltlastname: ['', Validators.required],
      Ltemailaddress: ['', Validators.required],
      Ltage: ['', Validators.required],
      physicaladdress: ['', Validators.required],
      phonenumber: ['', Validators.required],
      acceptTerm: ['', Validators.required],
      acceptPromotinal: [''],
      travelers: new FormArray([])
    });
    this.loadTravelerFileds();
  }

  // convenience getters for easy access to form fields
  get ft() { return this.tourCarBookForm.controls; }
  get tr() { return this.ft.travelers as FormArray; }
  /**
   * Generate travelers form fields basi on the number of travelers
   */
  loadTravelerFileds() {
    const numberOfTickets = this.NumberOfTravellers - 1 || 0;
    if (this.tr.length < numberOfTickets) {
        for (let i = this.tr.length; i < numberOfTickets; i++) {
            this.tr.push(this.formBuilder.group({
                tfirstname: ['', Validators.required],
                tlastname: ['', Validators.required],
                tage: ['', Validators.required],
            }));
        }
    } else {
        for (let i = this.tr.length; i >= numberOfTickets; i--) {
            this.tr.removeAt(i);
        }
    }
  }
  /**
   * submit Booking or Place Order
   */
  onSubmit() {
    this.submitted = true;
    // stop here if form if is invalid
    if (this.tourCarBookForm.invalid) {
      return;
    }
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.tourCarBookForm.value, null, 4));
    // start the process of creating booking in database
    this.checkoutcart();
  }

  checkoutcart() {
    this.paymentparam.merchant_id = PayFastAPI.merchant_id;
    this.paymentparam.merchant_key = PayFastAPI.merchant_key;
    this.paymentparam.production = PayFastAPI.production;
    this.paymentparam.url = `https://${
      PayFastAPI.production ? 'www.payfast' : 'sandbox.payfast'
    }.co.za/eng/process?`;
    this.paymentparam.paymentDetails = this.payment_details;
    this.paymentparam.redirectUrls = this.redirect_urls;
    this.paymentparam.referenceDetails = this.reference_details;

    this.addPaymentDetails();
    this.addReferenceDetails();
    this.cancelURL(PayFastAPI.cancel_url);
    this.returnURL(PayFastAPI.return_url);
    this.notifyURL(PayFastAPI.notify_url);
    // booking creation function
    this.createBooking();
    window.location.href = this.dial.generateURL(this.paymentparam);
  }


  getGlobalTotalCart() {
    for (const total of this.serviceT.localStorageCartProducts) {
      this.totalAmount += total.totCartPrice;
    }
  }

  addPaymentDetails(): void {
    this.payment_details.amount = this.totalAmount;
    this.payment_details.item_name = 'Tour booking';
    this.payment_details.name_first = this.tourCarBookForm.value.Ltfirstname;
    this.payment_details.name_last = this.tourCarBookForm.value.Ltlastname;
    this.payment_details.email_address = this.tourCarBookForm.value.Ltemailaddress;
    this.payment_details.cell_number = this.tourCarBookForm.value.phonenumber;
  }

  addReferenceDetails(): void {
    this.reference_details.m_payment_id = this.serviceT.create_book_UUID();
  }

  cancelURL(url: string): void {
    this.redirect_urls.cancel_url = url;
  }

  returnURL(url: string): void {
    this.redirect_urls.return_url = url;
  }

  notifyURL(url: string): void {
    this.redirect_urls.notify_url = url;
  }
  /**
   * createBooking : to save booking  details and monitor the booking status
   */
  async createBooking() {
    const newbookmodel = new NewBookingModel();
    const myDate = new Date();
    /**
     * Create New booking object defineTraveller
     */
    newbookmodel.company = 'feelathome';
    newbookmodel.travelerType = this.defineTraveller(Number(this.tourCarBookForm.value.Ltage));
    newbookmodel.bookingcode = this.reference_details.m_payment_id;
    newbookmodel.bookingstatus = 'inprocess';
    newbookmodel.totprice = Number(this.totalAmount);
    newbookmodel.customer = this.tourCarBookForm.value.Ltemailaddress;
    newbookmodel.paymentstatus = 'pending';
    newbookmodel.created = myDate.toDateString();
    newbookmodel.modified = myDate.toDateString();
    newbookmodel.totpersons = Number(this.totPeople());
    newbookmodel.bookdate = myDate.toDateString();
    newbookmodel.date = myDate.toDateString();
    newbookmodel.time = '';
    newbookmodel.orgdatetime = '';
    newbookmodel.cphonenumber = this.tourCarBookForm.value.phonenumber;
    newbookmodel.clastname = this.tourCarBookForm.value.Ltlastname;
    newbookmodel.cfirstname = this.tourCarBookForm.value.Ltfirstname;
    newbookmodel.physicaladdress = this.tourCarBookForm.value.physicaladdress;
    newbookmodel.tourcode = this.tourList[0].id;
    newbookmodel.tourname = this.tourList[0].name;
    // create table object
    this.tableData.DbName = databaseConfig.dbName;
    this.tableData.TableName = databaseConfig.tbnewbooking;
    this.tableData.In = newbookmodel;
    try {
      const createdBook = await this.serviceT.createBooking(this.tableData);
      this.saveOperatorBooking();
      this.saveCustormerBooking();
      this.createBookingInvoice();
    } catch (error) {
      console.log('error ***', error);
    }
  }

  /**
   * saveOperatorBooking : to save operator tour booking
   */
  saveOperatorBooking() {
    const mainbookModel = new MainBookingModel();
    const myDate = new Date();
    mainbookModel.company = 'feelathome';
    if (this.tourList.length > 1) {
        for (const persons of this.tourList) {
          mainbookModel.operator = persons.posteby;
          mainbookModel.bookcode = this.reference_details.m_payment_id;
          mainbookModel.tourcode = persons.id;
          mainbookModel.tourname = persons.name;
          mainbookModel.customer = this.tourCarBookForm.value.Ltemailaddress;
          mainbookModel.dateSubmitted = myDate.toDateString();
          mainbookModel.amount = Number(persons.totCartPrice);
          mainbookModel.noadult = Number(persons.numberAdultSelected);
          mainbookModel.noinfant =  Number(
            persons.numberInfantSelected
          );
          mainbookModel.nochildren = Number(
            persons.numberChildrenSelected
          );
          const departtime = persons.departureTime.split(',', 2);
          mainbookModel.tourdate = this.tourList[0].departureTime;
          for (const dateTime of departtime) {
           mainbookModel.tourdate = dateTime;
           mainbookModel.tourtime = dateTime;
          }
          mainbookModel.customerphonenumber = this.tourCarBookForm.value.phonenumber;
          mainbookModel.created = myDate.toDateString();
          mainbookModel.authorizedbyAPI = 'No';
          mainbookModel.bookingsource = 'feelathome';
          // create table object
          this.tableData.DbName = databaseConfig.dbName;
          this.tableData.TableName = databaseConfig.tbbookingMain;
          this.tableData.In = mainbookModel;
          this.serviceT.savePostdata(this.tableData).subscribe(data => {
            if (data.RESULT) {
              this.addBookingTraveler(persons.id);
            }
          });
        }
    } else if (this.tourList.length === 1) {
       mainbookModel.operator = this.tourList[0].posteby;
       mainbookModel.bookcode = this.reference_details.m_payment_id;
       mainbookModel.tourcode = this.tourList[0].id;
       mainbookModel.tourname = this.tourList[0].name;
       mainbookModel.customer = this.tourCarBookForm.value.Ltemailaddress;
       mainbookModel.dateSubmitted = myDate.toDateString();
       mainbookModel.amount = Number(this.tourList[0].totCartPrice);
       mainbookModel.noadult = Number(this.tourList[0].numberAdultSelected);
       mainbookModel.noinfant =  Number(
        this.tourList[0].numberInfantSelected
       );
       mainbookModel.nochildren = Number(
        this.tourList[0].numberChildrenSelected
       );
       const departtime = this.tourList[0].departureTime.split(',', 2);
       mainbookModel.tourdate = departtime[0];
       mainbookModel.tourtime = departtime[1];
       mainbookModel.customerphonenumber = this.tourCarBookForm.value.phonenumber;
       mainbookModel.created = myDate.toDateString();
       mainbookModel.authorizedbyAPI = 'No';
       mainbookModel.bookingsource = 'feelathome';
       // create table object
       this.tableData.DbName = databaseConfig.dbName;
       this.tableData.TableName = databaseConfig.tbbookingMain;
       this.tableData.In = mainbookModel;
       this.serviceT.savePostdata(this.tableData).subscribe(data => {
        if (data.RESULT) {
          this.addBookingTraveler(mainbookModel.tourcode);
        }
       });
    }
  }

  /**
   * saveCustormerBooking : to save customer tour booked
   */
  saveCustormerBooking() {
    const mainbookModel = new MainBookingModel();
    const myDate = new Date();
    mainbookModel.company = 'feelathome';
    if (this.tourList.length > 1) {
        for (const persons of this.tourList) {
          mainbookModel.operator = persons.posteby;
          mainbookModel.bookcode = this.reference_details.m_payment_id;
          mainbookModel.tourcode = persons.id;
          mainbookModel.tourname = persons.name;
          mainbookModel.customer = this.tourCarBookForm.value.Ltemailaddress;
          mainbookModel.dateSubmitted = myDate.toDateString();
          mainbookModel.amount = Number(persons.totCartPrice);
          mainbookModel.noadult = Number(persons.numberAdultSelected);
          mainbookModel.noinfant =  Number(
            persons.numberInfantSelected
          );
          mainbookModel.nochildren = Number(
            persons.numberChildrenSelected
          );
          const departtime = persons.departureTime.split(',', 2);
          mainbookModel.tourdate = this.tourList[0].departureTime;
          for (const dateTime of departtime) {
           mainbookModel.tourdate = dateTime;
           mainbookModel.tourtime = dateTime;
          }
          mainbookModel.customerphonenumber = this.tourCarBookForm.value.phonenumber;
          mainbookModel.created = myDate.toDateString();
          mainbookModel.authorizedbyAPI = 'No';
          mainbookModel.bookingsource = 'feelathome';
          // create table object
          this.tableData.DbName = databaseConfig.dbName;
          this.tableData.TableName = databaseConfig.tbcustomerbooking;
          this.tableData.In = mainbookModel;
          this.serviceT.savePostdata(this.tableData).subscribe(data => {
            if (data.RESULT) {
              console.log('saveCustormerBooking');
            }
          });
        }
    } else if (this.tourList.length === 1) {
       mainbookModel.operator = this.tourList[0].posteby;
       mainbookModel.bookcode = this.reference_details.m_payment_id;
       mainbookModel.tourcode = this.tourList[0].id;
       mainbookModel.tourname = this.tourList[0].name;
       mainbookModel.customer = this.tourCarBookForm.value.Ltemailaddress;
       mainbookModel.dateSubmitted = myDate.toDateString();
       mainbookModel.amount = Number(this.tourList[0].totCartPrice);
       mainbookModel.noadult = Number(this.tourList[0].numberAdultSelected);
       mainbookModel.noinfant =  Number(
        this.tourList[0].numberInfantSelected
       );
       mainbookModel.nochildren = Number(
        this.tourList[0].numberChildrenSelected
       );
       const departtime = this.tourList[0].departureTime.split(',', 2);
       mainbookModel.tourdate = departtime[0];
       mainbookModel.tourtime = departtime[1];
       mainbookModel.customerphonenumber = this.tourCarBookForm.value.phonenumber;
       mainbookModel.created = myDate.toDateString();
       mainbookModel.authorizedbyAPI = 'No';
       mainbookModel.bookingsource = 'feelathome';
       // create table object
       this.tableData.DbName = databaseConfig.dbName;
       this.tableData.TableName = databaseConfig.tbcustomerbooking;
       this.tableData.In = mainbookModel;
       // console.log('mainbookModel', this.tableData.In);
       this.serviceT.savePostdata(this.tableData).subscribe(data => {
        if (data.RESULT) {
          console.log('** saveCustormerBooking **');
        }
       });
    }
  }

  /**
   * addBookingTraveler : to save booking  travelers per tour
   */
  addBookingTraveler(tourcode) {
    const booktravelmodel = new BookingTravelerModel();
    const myDate = new Date();
    const travellers = this.tourCarBookForm.value.travelers;
    for (const traveler of travellers) {
    /**
     * Create New booking Traveler object
     */
    // const uuid = UUID.UUID();
    booktravelmodel.id = this.serviceT.create_book_UUID();
    booktravelmodel.company = 'feelathome';
    booktravelmodel.bookcode = this.reference_details.m_payment_id;
    booktravelmodel.tourcode = tourcode;
    booktravelmodel.tourname = '';
    booktravelmodel.cfirstname = traveler.tfirstname;
    booktravelmodel.clastname = traveler.tlastname;
    booktravelmodel.type =  this.defineTraveller(Number(traveler.tage));
    // create table object
    this.tableData.DbName = databaseConfig.dbName;
    this.tableData.TableName = databaseConfig.tbbookingtraveler;
    this.tableData.In = booktravelmodel;
    this.serviceT.savePostdata(this.tableData).subscribe(data => {
      if (data.RESULT) {
        console.log(' tbbookingtraveler', data.RESULT);
      }
    });
   }
  }

  private defineTraveller(age: number): string {
    if (age <= 6) {
      return 'child';
    }
    if (age > 6 && age <= 18) {
      return 'infant';
    }
    if (age > 18) {
      return 'Adult';
    }
  }

  createBookingInvoice() {
    const bookinginvoicemodel = new BookingInvoiceModel();
    const myDate = new Date();
    if (this.tourList.length === 1) {
      bookinginvoicemodel.created = '';
      bookinginvoicemodel.customer = this.tourCarBookForm.value.emailaddress;
      bookinginvoicemodel.departureTime = this.tourList[0].departureTime;
      bookinginvoicemodel.infants = Number(
        this.tourList[0].numberInfantSelected
      );
      bookinginvoicemodel.children = Number(
        this.tourList[0].numberChildrenSelected
      );
      bookinginvoicemodel.price = this.tourList[0].totCartPrice;
      bookinginvoicemodel.sku = this.tourList[0].id;
      bookinginvoicemodel.status = 'pending';
      bookinginvoicemodel.time = '';
      bookinginvoicemodel.date = '';
      bookinginvoicemodel.orgdatetime = '';
      bookinginvoicemodel.tourname = this.tourList[0].name;
      bookinginvoicemodel.bookingcode = this.reference_details.m_payment_id;
      bookinginvoicemodel.company = 'feelathome';
      bookinginvoicemodel.adults = Number(this.tourList[0].numberAdultSelected);
      this.tableData.DbName = databaseConfig.dbName;
      this.tableData.TableName = databaseConfig.tbbookinginvoice;
      this.tableData.In = bookinginvoicemodel;
      this.serviceT.savePostdata(this.tableData).subscribe(data => {
        if (data.RESULT) {
          console.log("One createBookingInvoice", data.RESULT);
        }
      });
    }
    if (this.tourList.length > 1) {
      for (const persons of this.tourList) {
        bookinginvoicemodel.created = '';
        bookinginvoicemodel.customer = this.tourCarBookForm.value.emailaddress;
        bookinginvoicemodel.departureTime = persons.departureTime;
        bookinginvoicemodel.infants = Number(persons.numberInfantSelected);
        bookinginvoicemodel.children = Number(persons.numberChildrenSelected);
        bookinginvoicemodel.price = Number(persons.totCartPrice);
        bookinginvoicemodel.sku = persons.id;
        bookinginvoicemodel.status = 'pending';
        bookinginvoicemodel.time = '';
        bookinginvoicemodel.tourname = persons.name;
        bookinginvoicemodel.bookingcode = this.reference_details.m_payment_id;
        bookinginvoicemodel.company = 'feelathome';
        bookinginvoicemodel.adults = Number(persons.numberAdultSelected);
        this.tableData.DbName = databaseConfig.dbName;
        this.tableData.TableName = databaseConfig.tbbookinginvoice;
        this.tableData.In = bookinginvoicemodel;
        this.serviceT.savePostdata(this.tableData).subscribe(data => {
          if (data.RESULT) {
            console.log("More createBookingInvoice", data.RESULT);
          }
        });
      }
    }
  }

  totPeople() {
    let totPerson = 0;
    for (const persons of this.tourList) {
      totPerson +=
        Number(persons.numberAdultSelected) +
        Number(persons.numberChildrenSelected) +
        Number(persons.numberInfantSelected);
    }
    return totPerson;
  }

}
