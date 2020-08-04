import { Component, OnInit, Input } from '@angular/core';
import { TourModel } from 'src/app/Shared/Model/Tour.model';
// import {Base64} from 'js-base64';

@Component({
  selector: 'app-toursection',
  templateUrl: './TourSection.component.html',
  styleUrls: ['./TourSection.component.scss']
})
export class ToursectionComponent implements OnInit {
  @Input() tourmodel: TourModel[];
  // encodep = Base64;
  constructor() { }

  ngOnInit() {
  }

}
