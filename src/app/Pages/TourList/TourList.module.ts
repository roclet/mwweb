import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourListComponent } from './TourList/TourList.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatDialogModule, MatTabsModule, MatRadioModule, MatIconModule, MatCardModule, MatTableModule } from '@angular/material';
import { ToastaModule } from 'ngx-toasta';
import { TourListRoutes } from './TourList-routing';


@NgModule({
  declarations: [
    TourListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(TourListRoutes),
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
export class TourListModule { }
