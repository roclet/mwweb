import { Component, Input, OnInit } from '@angular/core';
import { PostJsonDataModel } from 'src/app/Shared/Model/PostJsonData.model';
import { databaseConfig } from 'src/app/Core/Server/Server.config';
import { TourService } from 'src/app/Services/Tour.service';
import {Base64} from 'js-base64';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-relativetour',
  templateUrl: './RelativeTour.component.html',
  styleUrls: ['./RelativeTour.component.scss']
})
export class RelativetourComponent implements OnInit {
  @Input() country: any;
  datain = new PostJsonDataModel();
  singleProductData = [];
  productsList: any;
  encodep = Base64;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceT: TourService
    ) { }

  ngOnInit() {
    this.getData();
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
  }

  relativePostRooter(country, id) {
     this.router.navigate(['st_tour', this.encodep.encode(country), this.encodep.encode(id)]);
  }
  //  [routerLink]="['st_tour', encodep.encode(item?.country), encodep.encode(item?.id)]"

}
