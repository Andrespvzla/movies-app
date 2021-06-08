import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

import { movie } from 'src/app/interfaces/billboard-response';

import { moviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public movies: movie[] = [];
  public moviesSlider: movie[] = [];

  @HostListener('window:scroll', ['$event'])

  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if(pos > max){
      if(this.moviesService.loading){
        return;
      }
      this.moviesService.getbillboard().subscribe(movies => {
        this.movies.push(...movies);
      })
    }
  }

  constructor(private moviesService: moviesService){ }

  ngOnInit(): void {
    this.moviesService.getbillboard()
      .subscribe(movies =>{
      this.movies = movies;
      this.moviesSlider = movies.slice(0,4);
    })
  }

  ngOnDestroy() {
    this.moviesService.resetbillboardPage();
  }

}
