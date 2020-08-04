import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MainComponent } from './Main/Main.component';
import { HomeComponent } from './Pages/Home/home/Home.component';
import { SingletourComponent } from './Pages/Tour/SingleTour/SingleTour.component';
import { AddcartComponent } from './Pages/Tour/AddCart/AddCart.component';

export const AppRoutes: Routes = [
   {
      path : '',
      redirectTo: 'home',
      pathMatch: 'full',
   },
   {
    path : '',
    component : MainComponent,
    children: [
      {
        path : 'home',
        component : HomeComponent
      },
      {
         path: 'st_tour',
         component : SingletourComponent
       },
       {
         path: 'st_cart',
         component : AddcartComponent
       }
    ]
   },
   {
      path: 'session',
      loadChildren: () =>
        import('./Pages/Session/Session.module').then(m => m.SessionModule),
   },
   {
      path: '**',
      redirectTo: 'not-found'
   }
];
