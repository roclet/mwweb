import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './Signin/Signin.component';
import { MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatDialogModule,
  MatRadioModule,
  MatSliderModule,
  MatCheckboxModule,
  MatProgressBarModule,
  MatTabsModule,
  MatSidenavModule,
  MatListModule,
  MatChipsModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatSelectModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SessionRoutes } from './Session.routing';
import { GlobalModule } from 'src/app/Global/Global.module';
import { RegisterComponent } from './Register/Register.component';
import { FormsModule } from '@angular/forms';
// import { NgAisModule } from 'angular-instantsearch';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForgetpasswordComponent } from './ForgetPassword/ForgetPassword.component';

@NgModule({
  declarations: [SigninComponent, RegisterComponent, ForgetpasswordComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    GlobalModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatExpansionModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatChipsModule,
    MatListModule,
    MatSidenavModule,
    MatTabsModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatSliderModule,
    MatRadioModule,
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    RouterModule.forChild(SessionRoutes),
    FormsModule,
    // NgAisModule,
    MatCardModule
  ],
  exports: [SigninComponent],
})
export class SessionModule {}
