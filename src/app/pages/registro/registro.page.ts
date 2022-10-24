import { Component, OnInit, ViewChild  } from '@angular/core';
import { ServicedatosService, Registro } from 'src/app/service/servicedatos.service';
import { Platform, ToastController, IonList} from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {


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

   //create
   addDatos(){
    this.usuario.id = Date.now();
    this.storageService.addDatos(this.usuario).then(registro=>{
      this.usuario = <Registro>{};
      this.showToast('!Datos Agregados');
      this.loadDatos();
    });
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 2000
    });
    toast.present();
  }

}

