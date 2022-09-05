import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
interface Componente{
  icon: string;
  name: string;
  redirecTo:string;
  }

@Component({
  selector: 'app-generaqr',
  templateUrl: './generaqr.page.html',
  styleUrls: ['./generaqr.page.scss'],
})
export class GeneraqrPage implements OnInit {

  componentes : Componente[] =[
 
    { icon: 'people-circle-outline', 
      name: 'Profesor', 
    redirecTo: '/registroprofe' 
    },

    { icon: 'people-outline',
      name: 'Alumno', 
    redirecTo: '/registroalumno'
    },
  ];
  constructor(private menuController: MenuController) { }

  ngOnInit() {

  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
