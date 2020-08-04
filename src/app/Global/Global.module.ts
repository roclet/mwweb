import { NgModule } from '@angular/core';
import { CompontUiModule } from './Compont-ui/Compont-ui.module';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import { HomePageSliderComponent } from './Slider/HomePageSlider/HomePageSlider.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
    MatSliderModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatTableModule,
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
    MatRadioModule,
    MatDialogModule,
    MatGridListModule
} from '@angular/material';
import { SearchComponent } from './Search/Search.component';
import { CardComponent } from './Card/Card.component';
import { ToursectionComponent } from './TourSection/TourSection.component';
import { ToursdestinationComponent } from './ToursDestination/ToursDestination.component';
import { CoountdownComponent } from './CountDown/CountDown.component';
import { PopulardestinationComponent } from './PopularDestination/PopularDestination.component';
import { SubscribeComponent } from './Subscribe/Subscribe.component';
import { OurtrustedpartnersComponent } from './OurTrustedPartners/OurtrustedPartners.component';
import { CommonSignInComponent } from './CommonSignIn/CommonSignIn.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CompontUiModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatBadgeModule,
        MatMenuModule,
        MatToolbarModule,
        MatInputModule,
        MatDatepickerModule,

        FlexLayoutModule,

        MatNativeDateModule,
        MatProgressSpinnerModule,
        MatTableModule,
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
        MatRadioModule,
        MatDialogModule,
        MatGridListModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    declarations: [
        HomePageSliderComponent,
        SearchComponent,
        CardComponent,
        ToursectionComponent,
        ToursdestinationComponent,
        CoountdownComponent,
        PopulardestinationComponent,
        SubscribeComponent,
        OurtrustedpartnersComponent,
        CommonSignInComponent
    ],
    exports: [
        CompontUiModule,
        HomePageSliderComponent,
        SearchComponent,
        CardComponent,
        ToursectionComponent,
        ToursdestinationComponent,
        CoountdownComponent,
        PopulardestinationComponent,
        SubscribeComponent,
        OurtrustedpartnersComponent,
        CommonSignInComponent
    ],
    entryComponents: []
})
export class GlobalModule {}
