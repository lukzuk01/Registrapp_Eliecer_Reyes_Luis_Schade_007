import { Component, OnInit } from '@angular/core';
//Importamos el componente de servicios para llamar a nuestro método
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  //objeto tipo arreglo de la interfaz article
  noticias: Article[] = []

  constructor(private noticiasService:NoticiasService) { }


  ngOnInit() {
     this.noticiasService.getTopheadLines().subscribe(resp=>{
        console.log('noticias', resp);
        //push permite añadir al arreglo cada objeto de tipo noticias obtenidas desde el servicio
        this.noticias.push(...resp.articles);
     });
  }

}
