import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicedatosService, Datos } from '../../services/servicedatos.service';
import { Platform, ToastController, IonList} from '@ionic/angular';

//revisar esta page

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

datos: Datos[] = [];
newDato: Datos = <Datos>{};

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
    this.storageService.getDatos().then(datos=>{
      this.datos=datos;
    });
  }
 
  //Create
  addDatos(){
    this.newDato.modified = Date.now();
    this.newDato.id = Date.now();
    this.storageService.getDatos().then(datos=>{
      this.newDato = <Datos>{};
      this.showToast('!Datos Agregados');
      this.loadDatos();
    });
  }

  //update
  updateDatos(dato: Datos ){
    dato.nom = `UPDATED: ${dato.nom}`;
    dato.modified = Date.now();
    this.storageService.updateDatos(dato).then(item=>{
      this.showToast('Elemento actualizado!')
      this.myList.closeSlidingItems();
      this.loadDatos;
    });
  }

  //Delete
  deleteDatos(dato: Datos){
    this.storageService.deleteDatos(dato.id).then(item=>{
      this.showToast('Elemento eliminado!');
      this.myList.closeSlidingItems();
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
