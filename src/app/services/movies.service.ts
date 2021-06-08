import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { billboardResponse, movie } from '../interfaces/billboard-response';
import { MovieResponse } from '../interfaces/movie-response';
import { Cast, CreditsResponse } from '../interfaces/credits-response';

@Injectable({
  providedIn: 'root'
})
export class moviesService {

  private base_url: string = 'https://api.themoviedb.org/3/';
  private billBoardPage = 1;
  public loading: boolean = false;

  constructor( private http: HttpClient) { }

  get params(){
    return{
      api_key: 'acfb8b67182a3f00b25b544da918e7bc',
      languague: 'en-US',
      page: this.billBoardPage
    }
  }

  getbillboard():Observable<movie[]>{

    if(this.loading){
      return of([]);
    }
    
    this.loading = true;

    return this.http.get<billboardResponse>(`${this.base_url}movie/now_playing?`, {params: this.params})
    .pipe(
      map( (resp) => resp.results),
      tap( () => {
        this.billBoardPage += 1;
        this.loading = false;
      })
    );
  }

  searchmovies(texto: string):Observable<movie[]>{
    const params = {...this.params, page: 1, query: texto}
    return this.http.get<billboardResponse>(`${this.base_url}search/movie`, {params}).pipe(
      map(resp => resp.results)
    )
  }

  getmovieDetalle(id: string){
    return this.http.get<MovieResponse>(`${this.base_url}movie/${id}`, {params: this.params})
      .pipe(
        catchError(err => of(null))
      )
  }

  getCast(id: string):Observable<Cast[]>{
    return this.http.get<CreditsResponse>(`${this.base_url}movie/${id}/credits`, {params: this.params})
      .pipe(
        map(resp => resp.cast),
        catchError(err => of([]))
      );
  }

  resetbillboardPage(){
    this.billBoardPage = 1;
  }

}
