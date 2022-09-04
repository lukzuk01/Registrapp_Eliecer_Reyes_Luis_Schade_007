import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroprofePageRoutingModule } from './registroprofe-routing.module';

import { RegistroprofePage } from './registroprofe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroprofePageRoutingModule
  ],
  declarations: [RegistroprofePage]
})
export class RegistroprofePageModule {}
