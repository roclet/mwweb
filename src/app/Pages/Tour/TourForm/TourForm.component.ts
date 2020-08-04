import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-tourform',
  templateUrl: './TourForm.component.html',
  styleUrls: ['./TourForm.component.scss']
})
export class TourformComponent implements OnInit {

  tourBookForm: FormGroup;
  currentSingleProduct = [];
  summTotal = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.tourBookForm = this.formBuilder.group({
      bookdate: ['', [Validators.required]],
      numberAdults: ['', [Validators.required]],
      numberChildren: ['', [Validators.required]],
      numberInfant: ['', [Validators.required]],
      departureTime: ['', [Validators.required]],
    });
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
    ] = this.tourBookForm.value.departureTime;
    this.currentSingleProduct[0]['totCartPrice'] = this.summTotal;
    console.log('submitBookT &&', this.currentSingleProduct);
    // this.serviceT.bookNow(this.currentSingleProduct);
    this.summTotal = 0;
    // if (this.serviceT.checkCart()) {
    // data[0]['id'],
    //   this.router.navigate(['home/cart']);
    // }
  }

  numberAdults() {
    // for (const row of this.tourPrice) {
    //   this.currentSingleProduct[0][
    //     'totAdultPrice'
    //   ] = this.serviceT.calculatePriceByPerson(
    //     this.tourBookForm.value.numberAdults,
    //     row.adultprice
    //   );
    //   this.summTotal += this.serviceT.calculatePriceByPerson(
    //     this.tourBookForm.value.numberAdults,
    //     row.adultprice
    //   );
    // }
  }

  numberChildren() {
    // for (const row of this.tourPrice) {
    //   this.currentSingleProduct[0][
    //     'totChildPrice'
    //   ] = this.serviceT.calculatePriceByPerson(
    //     this.tourBookForm.value.numberAdults,
    //     row.childprice
    //   );
    //   this.summTotal += this.serviceT.calculatePriceByPerson(
    //     this.tourBookForm.value.numberAdults,
    //     row.childprice
    //   );
    // }
  }

  numberInfant() {
    // for (const row of this.tourPrice) {
    //   this.currentSingleProduct[0][
    //     'totInfantPrice'
    //   ] = this.serviceT.calculatePriceByPerson(
    //     this.tourBookForm.value.numberAdults,
    //     row.infantprice
    //   );
    //   this.summTotal += this.serviceT.calculatePriceByPerson(
    //     this.tourBookForm.value.numberAdults,
    //     row.infantprice
    //   );
    // }
  }

}
