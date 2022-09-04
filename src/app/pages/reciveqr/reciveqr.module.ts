import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReciveqrPageRoutingModule } from './reciveqr-routing.module';

import { ReciveqrPage } from './reciveqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReciveqrPageRoutingModule
  ],
  declarations: [ReciveqrPage]
})
export class ReciveqrPageModule {}
