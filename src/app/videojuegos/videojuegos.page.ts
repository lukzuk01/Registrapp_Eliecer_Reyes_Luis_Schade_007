import { Component, OnInit } from '@angular/core';
import { VideojuegosService } from 'src/app/service/videojuegos.service';
import { Results } from 'src/app/intefaces/interfaces';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.page.html',
  styleUrls: ['./videojuegos.page.scss'],
})
export class VideojuegosPage implements OnInit {

  videojuegos: Results[] = [] 
  constructor(private videojuegosService:VideojuegosService) { }

  ngOnInit() {
    this.videojuegosService.getTopHeadLines().subscribe(resp=>{
      console.log('videojuegos', resp);

      this.videojuegos.push(...resp.results)
    });
  }
}