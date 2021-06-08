import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';

import { HomeComponent } from './home/home.component';
import { movieComponent } from './movie/movie.component';
import { searchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';

import { PipesModule } from '../pipes/pipes.module';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    HomeComponent,
    movieComponent,
    searchComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HttpClientModule,
    PipesModule,
    RatingModule
  ]
})
export class PagesModule { }
