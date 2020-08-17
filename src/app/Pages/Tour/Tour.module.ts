import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingletourComponent } from './SingleTour/SingleTour.component';
import { CountrytourComponent } from './CountryTour/CountryTour.component';
import { CategotytourComponent } from './CategotyTour/CategotyTour.component';
import { MatTabsModule, MatDialogModule, MatRadioModule, MatCardModule, MatIconModule } from '@angular/material';
import { RelativetourComponent } from './RelativeTour/RelativeTour.component';
import { DescriptiontourComponent } from './DescriptionTour/DescriptionTour.component';
import { AddcartComponent } from './AddCart/AddCart.component';
import { TourformComponent } from './TourForm/TourForm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { ToastaModule } from 'ngx-toasta';
import { TourGridComponent } from './TourGrid/TourGrid.component';
import { CheckoutComponent } from './Checkout/Checkout.component';
@NgModule({
  declarations: [
    SingletourComponent,
    CountrytourComponent,
    CategotytourComponent,
    RelativetourComponent,
    DescriptiontourComponent,
    AddcartComponent,
    TourformComponent,
    TourGridComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatRadioModule,
    MatIconModule,
    MatCardModule,
    ToastaModule.forRoot(),
    MatTableModule
  ]
})
export class TourModule { }
