import { Component, Input, Output, OnInit, EventEmitter, OnChanges } from '@angular/core';
import { TourService } from 'src/app/Services/Tour.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tour-grid',
  templateUrl: './TourGrid.component.html',
  styleUrls: ['./TourGrid.component.scss']
})
export class TourGridComponent implements OnInit, OnChanges {
  @Input() totalCost: number;
  @Input() tours: any;

  @Input() currency: string;

  @Input() gridLength: any;

  @Input() gridThree: boolean = false;

  @Output() addToCart: EventEmitter<any> = new EventEmitter();

  @Output() addToWishList: EventEmitter<any> = new EventEmitter();

  @Output() removeTourData: EventEmitter<any> = new EventEmitter();

  @Output() emptyCartdata: EventEmitter<any> = new EventEmitter();
  cartTour: any;
  loaded = false;
  constructor(private router: Router, private serviceT: TourService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.cartTour = this.serviceT.getCart();
    this.totalCost = this.totalCost;
  }

  deleteSingleTour(product: any) {
    this.removeTourData.emit(product);
  }

  emptyCart(tours) {
    console.log('emptyCart', tours);
    this.emptyCartdata.emit(tours);
  }
  public addToCartTour(value: any) {
    this.addToCart.emit(value);
  }

  public onLoad() {
    this.loaded = true;
  }

  public productAddToWishlist(value: any, parentClass) {
    if (
      !document
        .getElementById(parentClass)
        .classList.contains('wishlist-active')
    ) {
      const element = (document.getElementById(parentClass).className +=
        ' wishlist-active');
    }
    this.addToWishList.emit(value);
  }

  public calculatePriceByPeopleType(detailData: any, value: any) {
    detailData.quantity = value;
    // this.totalPrice = detailData.price * value;
  }

  public quantityPerson(
    numberAdultSelected,
    numberChildrenSelected,
    numberInfantSelected
  ) {
    return numberAdultSelected + numberChildrenSelected + numberInfantSelected;
  }

  public checkoutCartTour() {
    this.serviceT.localStorageCartProducts =
      JSON.parse(localStorage.getItem('cartItem')) || [];
    this.serviceT.updateAllLocalCartProduct(
      this.serviceT.localStorageCartProducts
    );
    // this.router.navigate(['home/checkout']);
  }

  addTourToCart() {
    this.router.navigate(['home']);
  }

  public checkCartAlready(singleTour) {
    const products = JSON.parse(localStorage.getItem('cartItem')) || [];
    if (
      products.some(
        item => item.name === singleTour.name && item.addedCart === 'yes'
      )
    ) {
      return true;
    }
  }

}
