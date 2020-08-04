import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { LoginModel } from './model/login.model';

@Component({
  selector: 'app-common-sign-in',
  templateUrl: './CommonSignIn.component.html',
  styleUrls: ['./CommonSignIn.component.scss']
})
export class CommonSignInComponent implements OnInit {
  loginuser = new LoginModel();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  signIn(loginForm: NgForm) {
    this.loginuser.username = loginForm.value.email;
    // this.loginuser.password =  this.snakservice.encrypt_md5(loginForm.value.password);
  }

}
