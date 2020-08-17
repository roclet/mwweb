import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { TourService } from 'src/app/Services/Tour.service';

@Component({
  selector: 'app-tourform',
  templateUrl: './TourForm.component.html',
  styleUrls: ['./TourForm.component.scss']
})
export class TourformComponent implements OnInit {

  tourBookForm: FormGroup;
  // currentSingleProduct = [];
  summTotal = 0;
  @Input() tourPrice = [];
  @Input() currentSingleProduct = [];
  @Input() Tavaibility = [];
  departuretime: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private serviceT: TourService
  ) { }

  ngOnInit() {
    this.tourBookForm = this.formBuilder.group({
      bookdate: ['', [Validators.required]],
      numberAdults: ['', [Validators.required]],
      numberChildren: ['', [Validators.required]],
      numberInfant: ['', [Validators.required]],
    });
  }

  departureTime(checkindate, checkintime) {
    this.departuretime = checkindate + ',' + checkintime;
  }

  submitBookT() {
    this.currentSingleProduct[0]['bookdate'] = this.tourBookForm.value.bookdate;
    this.currentSingleProduct[0][
      'numberAdultSelected'
    ] = this.tourBookForm.value.numberAdults;
    this.currentSingleProduct[0][
      'numberChildrenSelected'
    ] = this.tourBookForm.value.numberChildren;
    this.currentSingleProduct[0][
      'numberInfantSelected'
    ] = this.tourBookForm.value.numberInfant;
    this.currentSingleProduct[0][
      'departureTime'
    ] = this.departuretime;
    this.currentSingleProduct[0]['totCartPrice'] = this.summTotal;
    console.log('#### submitBookT &&', this.currentSingleProduct);
    this.serviceT.bookNow(this.currentSingleProduct);
    this.summTotal = 0;
    // 2976027161 if (this.serviceT.checkCart()) {
    // data[0]['id'],
    //   this.router.navigate(['home/cart']);
    // }
  }

  numberAdults() {
    for (const row of this.tourPrice) {
      this.currentSingleProduct[0][
        'totAdultPrice'
      ] = this.serviceT.calculatePriceByPerson(
        this.tourBookForm.value.numberAdults,
        row.adultprice
      );
      this.summTotal += this.serviceT.calculatePriceByPerson(
        this.tourBookForm.value.numberAdults,
        row.adultprice
      );
    }
  }

  numberChildren() {
    for (const row of this.tourPrice) {
      this.currentSingleProduct[0][
        'totChildPrice'
      ] = this.serviceT.calculatePriceByPerson(
        this.tourBookForm.value.numberAdults,
        row.childprice
      );
      this.summTotal += this.serviceT.calculatePriceByPerson(
        this.tourBookForm.value.numberAdults,
        row.childprice
      );
    }
  }

  numberInfant() {
    for (const row of this.tourPrice) {
      this.currentSingleProduct[0][
        'totInfantPrice'
      ] = this.serviceT.calculatePriceByPerson(
        this.tourBookForm.value.numberAdults,
        row.infantprice
      );
      this.summTotal += this.serviceT.calculatePriceByPerson(
        this.tourBookForm.value.numberAdults,
        row.infantprice
      );
    }
  }

}
