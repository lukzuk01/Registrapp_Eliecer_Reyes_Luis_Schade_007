import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Datos{
  id: number;
  nom: string;
  apellido: string;
  edad: number;
  modified: number;
}

const ITEMS_KEY = 'my-datos';

@Injectable({
  providedIn: 'root'
})
export class ServicedatosService {

  private _storage : Storage;

  constructor(private storage: Storage) {
    this.init(); //llamando
   }

   //definimos en un método la creacion del almacenamiento

   async init(){ //definiendo la creacion del storage (my-db)
    const storage = await this.storage.create();
    this._storage=storage;
   }
   //implementar los metodos para la manipulación de nuestro storage
   //agregamos un objeto a la coleccion
   //el método recibe un parametro llamado datos
   //permite obtener las claves de los objetos y los almacena en datos
   //crea un espacio en la memoria a través del push con la informacion 
   //el nuevo objeto es seteado al storage por medio de claves
   
   //metodo que permite crear un objeto al almacen
   addDatos(dato: Datos):Promise<any>{
    return this.storage.get(ITEMS_KEY).then((datos : Datos[])=>{
      if (datos) {
        datos.push(dato);
        return this.storage.set(ITEMS_KEY, datos);
      } else {
          return this.storage.set(ITEMS_KEY, [dato]);
      }
    })
   }
   //nos permite obtener la informacion almacenada en el storage
   //por medio de sus keys
   getDatos(): Promise<Datos[]>{
    return this.storage.get(ITEMS_KEY);
   }
  //Actualizar informacion de un objeto
  updateDatos(dato: Datos): Promise<any>{
    return this.storage.get(ITEMS_KEY).then((datos : Datos[])=>{
      if (!datos || datos.length == 0){
        return null;
      }
      let newDato: Datos[] = [];
      for (let i of datos){
        if (i.id === dato.id){
          newDato.push(dato);
        }
       else{
        newDato.push(i);
       } 
      }
      return this.storage.set(ITEMS_KEY, newDato);
    });
  }

  //eliminar
  deleteDatos(id: number): Promise<Datos>{
    return this.storage.get(ITEMS_KEY).then((datos : Datos[])=>{
      if (!datos || datos.length == 0){
        return null;
      }
      let toKeep: Datos[] = [];
       for (let i of datos){
        if (i.id === id){
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    })
  }

}
