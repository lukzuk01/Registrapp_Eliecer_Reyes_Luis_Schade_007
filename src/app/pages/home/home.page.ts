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
    redirecTo: '/Registroprofe', 
    icon: 'people-circle-outline' },

    { name: 'Alumno', 
    redirecTo: '/Registroalumno', 
    icon: 'people-outline' },
  ];
  constructor(private menuController: MenuController) { }

  ngOnInit() {

  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}