import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaToHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopheadLines()
  {
    return this.http.get<RespuestaToHeadlines>
    ('https://newsapi.org/v2/everything?q=apple&from=2022-10-23&to=2022-10-23&sortBy=popularity&apiKey=86fc06825133457ab7cca5ee717fc50b');
  }

}
