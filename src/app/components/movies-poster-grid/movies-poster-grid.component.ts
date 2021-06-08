import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { movie } from 'src/app/interfaces/billboard-response';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css']
})
export class moviesPosterGridComponent implements OnInit {

  @Input() movies: movie[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onMovieClick(movie: movie){
    this.router.navigate(['/movie/', movie.id]);
  }

}
