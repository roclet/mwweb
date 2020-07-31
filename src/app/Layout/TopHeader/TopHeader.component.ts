import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './TopHeader.component.html',
  styleUrls: ['./TopHeader.component.scss']
})
export class TopHeaderComponent implements OnInit {
  textBtnConfig = {
    styles: {
      position: 'relative',
      // width: '100%',
      // height: '60px',
      backgroundColor: '#fc2900',
      color: '#fff',
      fontFamily: 'sans-serif',
      fontSize: '16px',
      borderRadius: '5px',
      border: '#fc2900',
    },
    text: 'Book Online'
  };
  constructor() { }

  ngOnInit() {
  }

  onClickEventReceived(event: string) {
    console.log('message');
  }

}
