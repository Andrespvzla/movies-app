import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { moviesPosterGridComponent } from './movies-poster-grid/movies-poster-grid.component';
import { CastSliderComponent } from './cast-slider/cast-slider.component';

import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    NavbarComponent,
    SliderComponent,
    moviesPosterGridComponent,
    CastSliderComponent
  ],
  exports: [
    NavbarComponent,
    SliderComponent,
    moviesPosterGridComponent,
    CastSliderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule
  ]
})
export class ComponentsModule { }
