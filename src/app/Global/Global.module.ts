import { NgModule } from '@angular/core';
import { CompontUiModule } from './Compont-ui/Compont-ui.module';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import { HomePageSliderComponent } from './Slider/HomePageSlider/HomePageSlider.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material';
import { SearchComponent } from './Search/Search.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CompontUiModule
    ],
    declarations: [
        HomePageSliderComponent,
        SearchComponent
    ],
    exports: [
        CompontUiModule,
        HomePageSliderComponent,
        SearchComponent
    ],
    entryComponents: []
})
export class GlobalModule {}
