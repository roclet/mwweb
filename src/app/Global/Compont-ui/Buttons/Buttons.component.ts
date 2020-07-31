import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './Buttons.component.html',
  styleUrls: ['./Buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  @Input() public class: string | null;
  @Input() public componentId: string;
  @Input() public btnSetting: any;
  @Input() public color?: string;
  @Output() public clicked = new EventEmitter<any>();

  constructor() {
    // this.type = 'mat-flat-button';
  }

  ngOnInit() {
  }

  handleClick() {
    this.clicked.emit();
  }

}
