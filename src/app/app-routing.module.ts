import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { searchComponent } from './pages/search/search.component';
import { movieComponent } from './pages/movie/movie.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'movie/:id',
    component: movieComponent
  },
  {
    path: 'search/:texto',
    component: searchComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
