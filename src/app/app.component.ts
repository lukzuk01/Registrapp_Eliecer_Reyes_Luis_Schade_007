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
 
    { icon: 'people-circle-outline', 
      name: 'Profesor', 
    redirecTo: '/registroprofe' 
    },

    { icon: 'people-outline',
      name: 'Alumno', 
    redirecTo: '/registroalumno'
    },
  ]
}
