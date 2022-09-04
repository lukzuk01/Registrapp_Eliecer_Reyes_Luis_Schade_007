import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReciveqrPage } from './reciveqr.page';

const routes: Routes = [
  {
    path: '',
    component: ReciveqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReciveqrPageRoutingModule {}
