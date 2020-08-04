import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './ForgetPassword.component.html',
  styleUrls: ['./ForgetPassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onForgetPassword(registerForm: NgForm) {}

}
