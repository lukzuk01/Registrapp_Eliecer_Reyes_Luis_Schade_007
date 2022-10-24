import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaToHeadLines, Results } from '../intefaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class VideojuegosService {

  constructor(private http: HttpClient) { }

  getTopHeadLines()
  {
    return this.http.get<RespuestaToHeadLines>
    ('https://api.rawg.io/api/platforms?key=2669469ce27542289c8b0e2b48690c80')  }
    
}