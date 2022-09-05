import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
interface Componente{
  name: string;
  redirecTo: string;
  icon:string;

}
@Component({
  selector: 'app-reciveqr',
  templateUrl: './reciveqr.page.html',
  styleUrls: ['./reciveqr.page.scss'],
})
export class ReciveqrPage implements OnInit {

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