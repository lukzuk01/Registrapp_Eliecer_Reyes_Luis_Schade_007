import { Component } from '@angular/core';

interface Componente{
  icon: string;
  title: string;
  url:string;

}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  componentes : Componente[] =[
 
    { title: 'Profesor', 
    url: '/Registroprofe', 
    icon: 'people-circle-outline' },

    { title: 'Alumno', 
    url: '/Registroalumno', 
    icon: 'people-outline' },
  ];
}
