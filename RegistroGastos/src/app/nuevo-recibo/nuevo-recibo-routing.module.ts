import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoReciboPage } from './nuevo-recibo.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoReciboPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoReciboPageRoutingModule {}
