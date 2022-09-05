import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  componentes : Componente[] =[
 
    { name: 'Profesor', 
    redirecTo: '/Registroprofe', 
    icon: 'people-circle-outline' },

    { name: 'Alumno', 
    redirecTo: '/Registroalumno', 
    icon: 'people-outline' },
  ];
}
