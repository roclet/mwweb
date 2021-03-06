import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from './Main/Main.component';
import { HomeComponent } from './Pages/Home/home/Home.component';
import { SingletourComponent } from './Pages/Tour/SingleTour/SingleTour.component';
import { AddcartComponent } from './Pages/Tour/AddCart/AddCart.component';
import { CheckoutComponent } from './Pages/Tour/Checkout/Checkout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'home/st_tour/:type/:id',
        component: SingletourComponent,
      },
      {
        path: 'home/st_cart',
        component: AddcartComponent,
      },
      {
        path: 'home/checkout',
        component: CheckoutComponent,
      },
    ],
  },
  {
    path: 'session',
    loadChildren: () =>
      import('./Pages/Session/Session.module').then((m) => m.SessionModule),
  },
  {
    path: 'filterTR',
    loadChildren: () =>
      import('./Pages/TourList/TourList.module').then((m) => m.TourListModule),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
