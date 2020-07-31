import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutes } from './app-routing';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
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
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(AppRoutes, {onSameUrlNavigation: 'reload'}),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    ToastaModule.forRoot(),
    GlobalModule
  ],
  providers: [
    MenuItems,
  ],
  exports : [
    RouterModule
 ],
  bootstrap: [AppComponent],
})
export class AppModule {}
