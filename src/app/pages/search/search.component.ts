import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { moviesService } from 'src/app/services/movies.service';
import { movie } from '../../interfaces/billboard-response';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class searchComponent implements OnInit {

  public valorBuscado = '';

  public movies: movie[] = [];

  constructor(private activatedRoute: ActivatedRoute, private moviesService: moviesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.valorBuscado = params.texto;
      this.moviesService.searchmovies(params.texto).subscribe(movies => {
        this.movies = movies;
      })
    })
  }

}
