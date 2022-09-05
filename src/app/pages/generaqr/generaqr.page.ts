import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
interface Componente{
  name: string;
  redirecTo: string;
  icon:string;

}
@Component({
  selector: 'app-generaqr',
  templateUrl: './generaqr.page.html',
  styleUrls: ['./generaqr.page.scss'],
})
export class GeneraqrPage implements OnInit {

  componentes : Componente[] =[
 
    { name: 'Profesor', 
    redirecTo: '/registroprofe', 
    icon: 'people-circle-outline' },

    { name: 'Alumno', 
    redirecTo: '/registroalumno', 
    icon: 'people-outline' },
  ];
  constructor(private menuController: MenuController) { }

  ngOnInit() {

  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
