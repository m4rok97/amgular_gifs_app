import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey = 'qgfgjlRZXFKKLeEAKbYvrZPR4Y2wFT2o';
  private serviceUrl = 'https://api.giphy.com/v1/gifs';
  private _history: string[] = JSON.parse(localStorage.getItem('history') || '[]');

  public results: Gif[] = JSON.parse(localStorage.getItem('results') || '[]');
  get history() {
    return [...this._history];
  }

  searchGifs(query: string) {
    query = query.trim().toLocaleLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.slice(0, 10);

      localStorage.setItem('history', JSON.stringify(this._history));

    }
    console.log(this._history);

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('q', query)
    .set('limit', '10');

    this.http
      .get<SearchGifsResponse>(
        `${this.serviceUrl}/search`, { params }
      )
      .subscribe((response) => {
        console.log(response.data);
        this.results = response.data;
        localStorage.setItem('results', JSON.stringify(this.results));
      });
  }
  constructor(private http: HttpClient) {}
}
