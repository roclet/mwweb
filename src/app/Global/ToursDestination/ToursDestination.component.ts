import { Component, OnInit, Input } from '@angular/core';
import { DestinationModel } from '../../Shared/Model/Destination.model';

@Component({
  selector: 'app-toursdestination',
  templateUrl: './ToursDestination.component.html',
  styleUrls: ['./ToursDestination.component.scss']
})
export class ToursdestinationComponent implements OnInit {
  @Input() topdestinationmodel: DestinationModel[];
  constructor() { }

  ngOnInit() {
  }

}
