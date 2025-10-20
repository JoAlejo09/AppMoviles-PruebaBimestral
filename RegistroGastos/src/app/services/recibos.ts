import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecibosService {
  private recibos: Recibo[] = [];
  constructor(){}

  agregarRecibo(recibo: Recibo){
    this.recibos.push(recibo)
  }
   obtenerRecibo(): Recibo[]{
    return this.recibos;
  }
  obtenerTotal():number{
    return this.recibos.reduce((monto,g)=> monto +g.monto,0);  
  }
}
export interface Recibo {
  descripcion: string;
  monto: number;
  foto: string;
  persona:string;
}