import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicedatosService, Registro } from 'src/app/service/servicedatos.service';
import { Platform, ToastController, IonList} from '@ionic/angular';
@Component({
  selector: 'app-registroalumno',
  templateUrl: './registroalumno.page.html',
  styleUrls: ['./registroalumno.page.scss'],
})
export class RegistroalumnoPage implements OnInit {

  registro: Registro[] = [];
  usuario: Registro = <Registro>{};
  
  @ViewChild('myList')myList :IonList;  


  constructor(private storageService: ServicedatosService, 
    private plt: Platform, private toastController: ToastController) {
      this.plt.ready().then(()=>{
        this.loadDatos();
      });
    }

  ngOnInit() {
  }
  
  //get
  loadDatos(){
    this.storageService.getDatos().then(registro=>{
      this.registro=registro;
    });
  }

}