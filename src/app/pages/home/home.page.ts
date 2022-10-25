import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
  name: string;
  redirecTo: string;
  icon:string;

}
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  componentes : Componente[] =[
 
    { name: 'Profesor', 
    redirecTo: '/registroprofe', 
    icon: 'people-circle-outline' },

    { name: 'Alumno', 
    redirecTo: '/registroalumno', 
    icon: 'people-outline' },

     //revisar si esta bien
    { name: 'Noticias',
      redirecTo: '/noticias', 
      icon: 'alarm-outline'}, 
      
      { name: 'Login',
      redirecTo: '/login', 
      icon: 'people-outline'}, 
  ];
  constructor(private menuController: MenuController) { }

  ngOnInit() {

  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}