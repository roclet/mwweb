import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingletourComponent } from './SingleTour/SingleTour.component';
import { CountrytourComponent } from './CountryTour/CountryTour.component';
import { CategotytourComponent } from './CategotyTour/CategotyTour.component';
import { MatTabsModule } from '@angular/material';
import { RelativetourComponent } from './RelativeTour/RelativeTour.component';
import { DescriptiontourComponent } from './DescriptionTour/DescriptionTour.component';
import { AddcartComponent } from './AddCart/AddCart.component';
import { TourformComponent } from './TourForm/TourForm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SingletourComponent,
    CountrytourComponent,
    CategotytourComponent,
    RelativetourComponent,
    DescriptiontourComponent,
    AddcartComponent,
    TourformComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule
  ]
})
export class TourModule { }
