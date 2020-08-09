import { Injectable } from '@angular/core';
import { PostJsonDataModel } from '../Shared/Model/PostJsonData.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {ToastaService, ToastaConfig, ToastOptions, ToastData} from 'ngx-toasta';
import { RequestdDataModel } from '../Shared/Model/RequestdData.model';
import { throwError, Observable } from 'rxjs';
import {retry, catchError, map, tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { serviceConfig, databaseConfig } from '../Core/Server/Server.config';
// import {errorHandleService} from './ErrorHandle.service';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  localStorageCartProducts: any;
  localStorageWishlist: any;
  navbarCartCount = 0;
  navbarWishlistProdCount = 0;
  buyUserCartProducts: any;
  datain = new PostJsonDataModel();
  tourPriceSetting = [];
  constructor(
    private http: HttpClient,
    private router: Router,
    // private handleError: errorHandleService,
    private toastyService: ToastaService,
    private toastyConfig: ToastaConfig
  ) { }
  // Get Data from API Rest service
  getDataDetailsApi(model: PostJsonDataModel): Observable<RequestdDataModel> {
    return this.http
      .post<RequestdDataModel>(
        `${
          environment.BASE_URL + environment.endpoint + serviceConfig.getListUrl
        }`,
        JSON.stringify(model)
      )
      .pipe(
        map(data => {
          // console.log(JSON.stringify(data), 'Dtata **', data);
          return data;
        }),
        catchError(this.errorHandl)
      );
  }
  // Post Data to API Rest service
  savePostdata(model): Observable<RequestdDataModel> {
    return this.http
      .post<any>(
        `${
          environment.BASE_URL +
          environment.endpoint +
          serviceConfig.postDataInsertUrl
        }`,
        JSON.stringify(model)
      )
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.errorHandl)
      );
  }

  // Adding new Tour to cart in localStorage
  public addTocart(data: any, type: any = '') {
    let tours: any;
    tours = JSON.parse(localStorage.getItem('cartItem')) || [];
    const productsLength = tours.length;

    const toastOption: ToastOptions = {
      title: 'Adding Tour To Cart',
      msg: 'Tour adding to the cart',
      showClose: true,
      timeout: 1000,
      theme: 'material',
    };

    const found = tours.some((el, index) => {
      if (el.id === data.id) {
        if (!data.quantity) {
          data.quantity = 1;
        }
        tours[index]['quantity'] = data.quantity;
        tours[index]['addedCart'] = 'yes';
        return true;
      }
    });
    if (!found) {
      tours = data;
    }

    if (productsLength === tours.length) {
      toastOption.title = 'Tour Already Added';
      toastOption.msg = 'You have already added this tour to cart list';
    }

    if (type === 'wishlist') {
      this.removeLocalWishlistProduct(data);
    }

    this.toastyService.wait(toastOption);
    setTimeout(() => {
      localStorage.setItem('cartItem', JSON.stringify(tours));
      this.calculateLocalCartTourCounts();
    }, 500);
  }

  // returning LocalCarts Product Count
  public calculateLocalCartTourCounts() {
    this.localStorageCartProducts = null;
    this.localStorageCartProducts =
      JSON.parse(localStorage.getItem('cartItem')) || [];
    this.navbarCartCount = +this.localStorageCartProducts.length;
  }

  // Removing Wishlist from local
  public removeLocalWishlistProduct(product: any) {
    const products: any = JSON.parse(localStorage.getItem('wishlist_item'));
    for (let i = 0; i < products.length; i++) {
      if (products[i].productId === product.productId) {
        products.splice(i, 1);
        break;
      }
    }
  }

  public bookNow(data: any) {
    let products: any;
    products = JSON.parse(localStorage.getItem('cartItem')) || [];
    if (products.length > 0) {
      for (const elt of data) {
        products.push(elt);
      }
      localStorage.setItem('cartItem', JSON.stringify(products));
      this.router.navigate(['home/st_cart']);
    } else {
      products = data;
      localStorage.setItem('cartItem', JSON.stringify(products));
      this.router.navigate(['home/st_cart']);
    }
    // this.calculateLocalCartTourCounts();
  }
  getPriceSettings(tourId) {
    this.datain.Fields = [];
    this.datain.TableName = databaseConfig.tbItempriceSetting;
    this.datain.DbName = databaseConfig.dbName;
    this.datain.Conditions = [
      {
        Key: 'itemcode',
        Val: tourId,
        Type: 'string',
      },
    ];
    this.getDataDetailsApi(this.datain).subscribe(data2 => {
      this.tourPriceSetting = data2.RESULT;
    });
  }

  checkCart() {
    let tours = [];
    tours = JSON.parse(localStorage.getItem('cartItem')) || [];
    if (tours.length > 0) {
      return true;
    }
    return false;
  }

  getCart() {
    const tours = JSON.parse(localStorage.getItem('cartItem')) || [];
    return tours;
  }

  public getTotalPrice(adultprice, infantprice, childprice) {
    let total = 0;
    total += Number(adultprice) + Number(infantprice) + Number(childprice);
    return total;
  }

  public calculatePriceByPerson(numberAdultSelected, priceTag) {
    let total = 0;
    total += Number(numberAdultSelected) * Number(priceTag);
    return total;
  }

  public updateAllLocalCartProduct(products: any) {
    localStorage.removeItem('cart_item');
    localStorage.removeItem('cartItem');
    localStorage.setItem('cartItem', JSON.stringify(products));
    this.router.navigate(['home/checkout']);
  }
  // returning LocalCarts Product Count
  public calculateLocalCartProdCounts() {
    this.localStorageCartProducts = null;
    this.localStorageCartProducts =
      JSON.parse(localStorage.getItem('cartItem')) || [];
    this.navbarCartCount = +this.localStorageCartProducts.length;
  }

  // Removing cart from local
  public removeLocalCartProduct(product: any) {
    const products: any = JSON.parse(localStorage.getItem('cartItem'));

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === product.id) {
        products.splice(i, 1);
        break;
      }
    }

    const toastOption: ToastOptions = {
      title: 'Remove Tour From Cart',
      msg: 'Tour removing from cart',
      showClose: true,
      timeout: 1000,
      theme: 'material',
    };

    this.toastyService.wait(toastOption);
    setTimeout(() => {
      // ReAdding the products after remove
      localStorage.setItem('cartItem', JSON.stringify(products));
      // this.calculateLocalCartProdCounts();
    }, 500);
  }

  emptyProduct(tour) {
    console.log('emptyProduct $$', tour);
    const products = JSON.parse(localStorage.getItem('cartItem')) || [];
    if (tour.length === products.length) {
      localStorage.removeItem('cartItem');
      console.log(products.length, 'Lenght emptyProduct length', tour.length);
    } else {
      localStorage.removeItem('cartItem');
    }
  }

  create_book_UUID() {
    let dt = new Date().getTime();
    const uuid = 'PI-xxxx-4xxx'.replace(/[xy]/g, function(c) {
        // tslint:disable-next-line:no-bitwise
        const r = ( dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === 'x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
  }

  // error handle.
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
