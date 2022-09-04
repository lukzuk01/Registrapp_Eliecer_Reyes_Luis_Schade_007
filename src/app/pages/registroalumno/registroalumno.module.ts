import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroalumnoPageRoutingModule } from './registroalumno-routing.module';

import { RegistroalumnoPage } from './registroalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroalumnoPageRoutingModule
  ],
  declarations: [RegistroalumnoPage]
})
export class RegistroalumnoPageModule {}
