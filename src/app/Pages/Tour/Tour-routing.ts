import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SingletourComponent } from './SingleTour/SingleTour.component';

export const AppRoutes: Routes = [
     {
        path: 'tourlist',
        component: SingletourComponent
     }
];
