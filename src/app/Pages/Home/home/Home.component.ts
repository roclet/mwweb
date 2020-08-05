import { Component, OnInit } from '@angular/core';
import { databaseConfig } from 'src/app/Core/Server/Server.config';
import { environment } from 'src/environments/environment';
import { PostJsonDataModel } from 'src/app/Shared/Model/PostJsonData.model';
import { DestinationModel } from 'src/app/Shared/Model/Destination.model';
import { TourModel } from 'src/app/Shared/Model/Tour.model';
import { TourService } from 'src/app/Services/Tour.service';

@Component({
  selector: 'app-home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {
  datain = new PostJsonDataModel();
  tourmodel = new Array<TourModel>();
  topdestinationmodel = new Array<DestinationModel>();
  constructor(private serviceT: TourService) { }

  ngOnInit() {
    this.getAllTour();
  }

  getAllTour() {
    this.datain.Fields = [];
    this.datain.TableName = databaseConfig.tbDTour;
    this.datain.DbName = environment.cassandra.dbName;
    this.datain.Conditions = [
      {
        Key: 'Company',
        Val: 'feelathome',
        Type: 'string',
      },
    ];
    this.serviceT.getDataDetailsApi(this.datain).subscribe(data => {
      this.tourmodel = data.RESULT;
      console.log("this.tourmodel", this.tourmodel);
    });
  }

}
