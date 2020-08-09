import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { DialogService } from 'src/app/Services/DialogService';
// import { TourService } from '@app/Service/Tour.service';
// import { DialogService } from '@app/Service/DialogService';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './ConfirmationPopup.component.html',
  styleUrls: ['./ConfirmationPopup.component.scss']
})
export class ConfirmationPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmationPopupComponent>, public serviceD: DialogService) { }

  ngOnInit() {
    // dMessage
  }

}
