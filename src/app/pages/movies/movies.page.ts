import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../../services/movie.service';
import { IMovies } from '../../model/IMovies.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  results: Observable<IMovies>;
  term: string = '';
  type: string = '';
  constructor(private MovieService: MovieService) { }

  ngOnInit() {
  }

  searchChanged(): void {
    this.results = this.MovieService.searchMovies(this.term, this.type);
  }
}
