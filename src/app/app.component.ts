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
 
    { icon: 'home-outline', 
    name: 'inicio', 
  redirecTo: '/home' 
   },
    { icon: 'people-circle-outline', 
      name: 'Profesor', 
    redirecTo: '/generaqr' 
    },

    { icon: 'people-outline',
      name: 'Alumno', 
    redirecTo: '/reciveqr'
    },
    { icon: 'alarm-outline',
      name: 'Noticias', 
    redirecTo: '/noticias'
    },
   
    { icon: 'log-out-outline', 
    name: 'cerrar sesion', 
  redirecTo: '/login' 
  },

 
  ]
}
