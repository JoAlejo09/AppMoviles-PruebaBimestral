import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoReciboPageRoutingModule } from './nuevo-recibo-routing.module';

import { NuevoReciboPage } from './nuevo-recibo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoReciboPageRoutingModule
  ],
  declarations: [NuevoReciboPage]
})
export class NuevoReciboPageModule {}
