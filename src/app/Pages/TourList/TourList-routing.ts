import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TourListComponent } from './TourList/TourList.component';

export const TourListRoutes: Routes = [
     {
        path: 'type/:searchType/searchpara/:searchone/:searchtwo',
        component: TourListComponent
     }
];
