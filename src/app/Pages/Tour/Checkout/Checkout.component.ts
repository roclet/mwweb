import { Component, OnInit } from '@angular/core';
import { PaymentDetails } from '../../../Shared/Model/PaymentModel/PaymentDetails';
import { ReferenceDetails } from '../../../Shared/Model/PaymentModel/ReferenceDetails';
import { RedirectUrls } from '../../../Shared/Model/PaymentModel/RedirectUrls';
import { PaymentParam } from '../../../Shared/Model/PaymentModel/PaymentParam';
import { TableModel } from '../../../Shared/Model/TableModel';
import { PostJsonDataModel } from '../../../Shared/Model/PostJsonData.model';
import { TourService } from '../../../Services/Tour.service';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, NgForm, Validators} from '@angular/forms';
import {ToastaService, ToastaConfig, ToastOptions, ToastData} from 'ngx-toasta';
import { HttpClient } from '@angular/common/http';
import { DialogService } from '../../../Services/DialogService';
import { databaseConfig, PayFastAPI } from 'src/app/Core/Server/Server.config';
import { BookingModel } from '../../../Shared/Model/Booking.model';
import { BookingInvoiceModel } from '../../../Shared/Model/BookingInvoice.model';

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
  }

  checkoutcart(tourCarBookForm: NgForm) {
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxx');
    this.paymentparam.merchant_id = PayFastAPI.merchant_id;
    this.paymentparam.merchant_key = PayFastAPI.merchant_key;
    this.paymentparam.production = PayFastAPI.production;
    this.paymentparam.url = `https://${
      PayFastAPI.production ? 'www.payfast' : 'sandbox.payfast'
    }.co.za/eng/process?`;
    this.paymentparam.paymentDetails = this.payment_details;
    this.paymentparam.redirectUrls = this.redirect_urls;
    this.paymentparam.referenceDetails = this.reference_details;
    this.addPaymentDetails(tourCarBookForm);
    this.addReferenceDetails();
    this.cancelURL(PayFastAPI.cancel_url);
    this.returnURL(PayFastAPI.return_url);
    this.notifyURL(PayFastAPI.notify_url);
    // this.dial.generateURL(this.paymentparam);
    if (this.acceptTerm) {
      this.validate = true;
      this.createBooking(tourCarBookForm);
      this.createBookingInvoice(tourCarBookForm);
      window.location.href = this.dial.generateURL(this.paymentparam);
    } else {
      this.validate = false;
    }
  }

  getGlobalTotalCart() {
    for (const total of this.serviceT.localStorageCartProducts) {
      this.totalAmount += total.totCartPrice;
    }
  }

  addPaymentDetails(tourCarBookForm): void {
    this.payment_details.amount = this.totalAmount;
    this.payment_details.item_name = 'Tour booking';
    this.payment_details.name_first = tourCarBookForm.value.firstname;
    this.payment_details.name_last = tourCarBookForm.value.lastname;
    this.payment_details.email_address = tourCarBookForm.value.emailaddress;
    this.payment_details.cell_number = tourCarBookForm.value.phonenumber;
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

  createBooking(tourCarBookForm) {
    const bookingmodel = new BookingModel();
    const myDate = new Date();
    bookingmodel.bookdate = myDate.toDateString();
    bookingmodel.bookingcode = this.reference_details.m_payment_id;
    bookingmodel.company = 'feelathome';
    bookingmodel.customer = this.payment_details.email_address;

    bookingmodel.cfirstname = this.payment_details.name_first;
    bookingmodel.clastname = tourCarBookForm.value.lastname;
    bookingmodel.cphonenumber = this.payment_details.cell_number;
    bookingmodel.physicaladdress = tourCarBookForm.value.physicaladdress;
    bookingmodel.paymentstatus = 'pending';
    bookingmodel.time = '';
    bookingmodel.created = '';
    bookingmodel.totprice = Number(this.totalAmount);
    bookingmodel.totpersons = Number(this.totPeople());
    bookingmodel.date = "";
    bookingmodel.orgdatetime = "";
    // table build
    this.tableData.DbName = databaseConfig.dbName;
    this.tableData.TableName = databaseConfig.tbbooking;
    this.tableData.In = bookingmodel;
    console.log('table build', this.tableData);
    this.serviceT.savePostdata(this.tableData).subscribe(data => {
      if (data.RESULT) {
        // console.log("More createBooking",data.RESULT);
      }
    });
  }

  createBookingInvoice(tourCarBookForm) {
    const bookinginvoicemodel = new BookingInvoiceModel();
    const myDate = new Date();
    if (this.tourList.length === 1) {
      bookinginvoicemodel.created = '';
      bookinginvoicemodel.customer = tourCarBookForm.value.emailaddress;
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
      bookinginvoicemodel.date = "";
      bookinginvoicemodel.orgdatetime = "";
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
        bookinginvoicemodel.customer = tourCarBookForm.value.emailaddress;
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
