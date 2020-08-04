import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.scss']
})
export class RegisterComponent implements OnInit {

  radioOptions: string = 'Partner';
  accept = '';
  constructor() { }

  ngOnInit() {
  }

  onRegisterin(registerForm: NgForm) {
  }

}
