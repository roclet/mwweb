import { Injectable } from '@angular/core';
import { PostJsonDataModel } from '../Shared/Model/PostJsonData.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {ToastaService, ToastaConfig, ToastOptions, ToastData} from 'ngx-toasta';
import { RequestdDataModel } from '../Shared/Model/RequestdData.model';
import { throwError, Observable } from 'rxjs';
import {retry, catchError, map, tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { serviceConfig } from '../Core/Server/Server.config';
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
