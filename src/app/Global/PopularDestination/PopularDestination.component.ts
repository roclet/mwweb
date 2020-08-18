import { Component, OnInit, Input } from '@angular/core';
import { DestinationModel } from '../../Shared/Model/Destination.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TourModel } from 'src/app/Shared/Model/Tour.model';
import {Base64} from 'js-base64';
@Component({
  selector: 'app-populardestination',
  templateUrl: './PopularDestination.component.html',
  styleUrls: ['./PopularDestination.component.scss']
})
export class PopulardestinationComponent implements OnInit {
  @Input() tourmodel: TourModel[];
  encodep = Base64;
  id: any;
  country: any;
  constructor( private route: ActivatedRoute, private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.id = this.encodep.decode(res.id);
      this.country = this.encodep.decode(res.type);
    });
  }
}
