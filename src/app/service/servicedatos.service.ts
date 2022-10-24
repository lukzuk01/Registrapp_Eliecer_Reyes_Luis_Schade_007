import { Injectable } from '@angular/core';
import { Storage }  from '@ionic/storage';

export interface Registro{
  id : number;
  nombre: string;
  email: string;
  password: string;
  numero: number,
  genero: string;
  pais: string;
}

const ITEMS_KEY = 'my-datos';

@Injectable({
  providedIn: 'root'
})
export class ServicedatosService {

  private _storage : Storage;

  constructor(private storage: Storage) { 
    this.init();
   }

   //método la creación del almacenamiento
  async init(){
    const storage = await this.storage.create();
    this._storage= storage;
  }

  
  addDatos(registros: Registro):Promise<any>{
   return this.storage.get(ITEMS_KEY).then((registro : Registro[])=>{
      if (registro) {
        registro.push(registros);
        return this.storage.set(ITEMS_KEY, registro);
      }else {
        return this.storage.set(ITEMS_KEY, [registros]);
      }

    })
  }

   //Nos permmite obtener la información almacenada en el storage 
   //por medio de sus keys 

   getDatos(): Promise<Registro[]>{
    return this.storage.get(ITEMS_KEY);
  }


  //actualizar información de un objeto 
  updateDatos(registros: Registro): Promise<any>{
    return this.storage.get(ITEMS_KEY).then((registro : Registro[])=>{
      if (!registro || registro.length == 0){
        return null;
      }
      let usuario: Registro[] = [];
      for (let i of registro){
        if (i.id === registros.id){
          usuario.push(registros);
        }
        else{
          usuario.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, usuario);
    });
  }

   //Eliminar
  deleteDatos(id: number): Promise<Registro>{
    return this.storage.get(ITEMS_KEY).then((registro : Registro[])=>{
      if (!registro || registro.length === 0){
        return null;
      }
      let toKeep: Registro[] = []; 
      for (let i of registro){
        if (i.id !== id){
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });

  }


}