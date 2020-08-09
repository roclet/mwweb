import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutes } from './app-routing';
import { AppComponent } from './app.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatRadioModule,
} from '@angular/material';
import { MainComponent } from './Main/Main.component';
import { HeaderComponent } from './Layout/Header/HeaderOne/HeaderOne.component';
import { HeaderTwoComponent } from './Layout/Header/HeaderTwo/Header-Two.component';
import { MenuComponent } from './Layout/Menu/Menu/Menu.component';
import { SidebarMenuComponent } from './Layout/Menu/SidebarMenu/SidebarMenu.component';
import { TopHeaderComponent } from './Layout/TopHeader/TopHeader.component';
import { GlobalModule } from './Global/Global.module';
import { ToastaModule } from 'ngx-toasta';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/Home/home/Home.component';
import { AboutComponent } from './Pages/About/About.component';
import { MenuItems } from './Core/menu-items/menu-items';
import { FooterComponent } from './Layout/Footer/Footer.component';
import { TourModule } from './Pages/Tour/Tour.module';
import { TourService } from './Services/Tour.service';
import { HttpClientModule } from '@angular/common/http';
import { DialogService } from './Services/DialogService';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    HeaderTwoComponent,
    MenuComponent,
    SidebarMenuComponent,
    TopHeaderComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    // NgbModule.forRoot(),
    RouterModule.forRoot(AppRoutes, {onSameUrlNavigation: 'reload'}),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    ToastaModule.forRoot(),
    GlobalModule,
    HttpClientModule,
    TourModule
  ],
  providers: [
    MenuItems,
    TourService,
    DialogService
  ],
  exports : [
    RouterModule,
    MatIconModule,
    MatTabsModule,
 ],
  bootstrap: [AppComponent],
})
export class AppModule {}
