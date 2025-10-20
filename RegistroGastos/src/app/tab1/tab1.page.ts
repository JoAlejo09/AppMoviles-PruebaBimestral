import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RecibosService, Recibo } from '../services/recibos';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  recibos: Recibo [] =[];
  totalGasto: number = 0;

  constructor(private reciboService: RecibosService) {}

  ngOnInit(){
    this.cargarDatos();
  }
  cargarDatos(){
    this.totalGasto = this.reciboService.obtenerTotal();
    this.recibos = this.reciboService.obtenerRecibo();
  }
}


