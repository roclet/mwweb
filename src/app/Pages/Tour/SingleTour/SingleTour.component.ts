import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { TourService } from 'src/app/Services/Tour.service';
import {Base64} from 'js-base64';
import { databaseConfig } from 'src/app/Core/Server/Server.config';
import { PostJsonDataModel } from 'src/app/Shared/Model/PostJsonData.model';
@Component({
  selector: 'app-singletour',
  templateUrl: './SingleTour.component.html',
  styleUrls: ['./SingleTour.component.scss']
})
export class SingletourComponent implements OnInit {

  id: any;
  country: any;
  encodep = Base64;
  apiResponse: any;
  singleProductData = [];
  productsList: any;
  priceList: any;
  slotList: any;
  languesList: any;
  galleryList = [];
  // public tableData = new TableModel();
  datain = new PostJsonDataModel();
  // public encodep = Base64;
  Tavaibility = [];
  TLanguage = [];
  currentSingleProduct = [];
  TgalleryImages = [];

  tourPrice = [];
  summTotal = 0;
  TourCat = [];
  TourSubcat = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private serviceT: TourService
  ) { }
  ngOnInit() {
    this.route.params.subscribe(res => {
      this.id = this.encodep.decode(res.id);
      this.country = this.encodep.decode(res.type);
      this.getData();
    });
  }

  private getData() {
    this.datain.Fields = [];
    this.datain.TableName = databaseConfig.tbDTour;
    this.datain.DbName = databaseConfig.dbName;
    this.datain.Conditions = [
      {
        Key: 'Company',
        Val: 'feelathome',
        Type: 'string',
      },
    ];
    this.serviceT.getDataDetailsApi(this.datain).subscribe(data => {
      this.checkResponse(data.RESULT);
    });
  }

  private checkResponse(response) {
    this.productsList = null;
    this.productsList = response.filter(dataIn => {
      return dataIn.country === this.country;
    });
    this.productsList = response;
    if (this.productsList.length > 0) {
      for (const data of this.productsList) {
        if (data.id === this.id) {
          this.singleProductData = data;
          this.currentSingleProduct.push(this.singleProductData);
          this.getAvailable(data.id);
          this.getLanguages(data.id);
          this.getGallery(data.id);
          this.getPriceSettings(data.id);
          this.getCategories(data.id);
          this.getSubCategories(data.id);
          break;
        }
      }
    }
  }

  private getAvailable(tourId) {
    this.datain.Fields = [];
    this.datain.TableName = databaseConfig.tbTourCalendar;
    this.datain.DbName = databaseConfig.dbName;
    this.datain.Conditions = [
      {
        Key: 'itemcode',
        Val: tourId,
        Type: 'string',
      },
    ];
    this.serviceT.getDataDetailsApi(this.datain).subscribe(data => {
      this.Tavaibility = data.RESULT;
      console.log('zzzzzzzzz', this.Tavaibility);
    });
  }

  private getLanguages(tourId) {
    this.datain.Fields = [];
    this.datain.TableName = databaseConfig.tbTourLanguage;
    this.datain.DbName = databaseConfig.dbName;
    this.datain.Conditions = [
      {
        Key: 'itemcode',
        Val: tourId,
        Type: 'string',
      },
    ];
    this.serviceT.getDataDetailsApi(this.datain).subscribe(data => {
      this.TLanguage = data.RESULT;
    });
  }

  private getGallery(tourId) {
    this.datain.Fields = [];
    this.datain.TableName = databaseConfig.tbPhotogallery;
    this.datain.DbName = databaseConfig.dbName;
    this.datain.Conditions = [
      {
        Key: 'SKU',
        Val: tourId,
        Type: 'string',
      },
    ];
    this.serviceT.getDataDetailsApi(this.datain).subscribe(data => {
      this.TgalleryImages = data.RESULT;
    });
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
    this.serviceT.getDataDetailsApi(this.datain).subscribe(data2 => {
      this.tourPrice = data2.RESULT;
    });
  }

  getCategories(tourId) {
    this.datain.Fields = [];
    this.datain.TableName = databaseConfig.tbTourCategory;
    this.datain.DbName = databaseConfig.dbName;
    this.datain.Conditions = [
      {
        Key: 'itemcode',
        Val: tourId,
        Type: 'string',
      },
    ];
    this.serviceT.getDataDetailsApi(this.datain).subscribe(data2 => {
      this.TourCat = data2.RESULT;
    });
  }

  getSubCategories(tourId) {
    this.datain.Fields = [];
    this.datain.TableName = databaseConfig.tbTourSubCategory;
    this.datain.DbName = databaseConfig.dbName;
    this.datain.Conditions = [
      {
        Key: 'itemcode',
        Val: tourId,
        Type: 'string',
      },
    ];
    this.serviceT.getDataDetailsApi(this.datain).subscribe(data2 => {
      this.TourSubcat = data2.RESULT;
    });
  }
}
