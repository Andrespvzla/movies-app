import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Cast } from 'src/app/interfaces/credits-response';
import { MovieResponse } from 'src/app/interfaces/movie-response';
import { moviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class movieComponent implements OnInit {

  public movie!: MovieResponse;
  public cast: Cast[] = [];

  constructor(private activatedRoute: ActivatedRoute, private moviesService: moviesService, private location: Location, private router: Router) { }

  ngOnInit(): void {
    const {id} = this.activatedRoute.snapshot.params;

    combineLatest([
      this.moviesService.getmovieDetalle(id),
      this.moviesService.getCast(id)
    ]).subscribe(([movie, cast]) => {
      if(!movie){
        this.router.navigateByUrl('/home');
        return;
      }
      this.movie = movie;
      this.cast = cast.filter(actor => actor.profile_path !== null);
    }) 
  }

  onRegresar(){
    this.location.back();
  }
}
