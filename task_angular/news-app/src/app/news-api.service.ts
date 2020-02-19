import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import API_KEY from './config';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http: HttpClient) { }

  getSources () {
    return this.http.get(`https://newsapi.org/v2/sources?apiKey=${API_KEY}`).toPromise();
  }

  getItems (id) {
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=${API_KEY}`).toPromise();
  }
}
