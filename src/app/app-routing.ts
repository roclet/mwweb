import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MainComponent } from './Main/Main.component';
import { HomeComponent } from './Pages/Home/home/Home.component';

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
      }
    ]
   },
   {
      path: '**',
      redirectTo: 'not-found'
   }
];
