import { Component, OnInit, Input } from '@angular/core';
import { TourModel } from 'src/app/Shared/Model/Tour.model';
import {Base64} from 'js-base64';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-toursection',
  templateUrl: './TourSection.component.html',
  styleUrls: ['./TourSection.component.scss']
})
export class ToursectionComponent implements OnInit {
  @Input() tourmodel: TourModel[];
  encodep = Base64;
  id: any;
  country: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.id = this.encodep.decode(res.id);
      this.country = this.encodep.decode(res.type);
      console.log(this.country, "params", this.id);
      // this.getData();
    });
  }

}
