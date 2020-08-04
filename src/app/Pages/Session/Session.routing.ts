import { Routes } from '@angular/router';
import { SigninComponent } from './Signin/Signin.component';
import { RegisterComponent } from './Register/Register.component';
import { ForgetpasswordComponent } from './ForgetPassword/ForgetPassword.component';

export const SessionRoutes: Routes = [
    {
        path: '',
        component: SigninComponent
     },
     {
        path: 'signin',
        component: SigninComponent
     },
     {
        path: 'signup',
        component: RegisterComponent
     },
     {
      path: 'forgot-password',
      component: ForgetpasswordComponent
     }

     // RegisterComponent
];
