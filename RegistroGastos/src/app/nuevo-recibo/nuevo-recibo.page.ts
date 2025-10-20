import { Component, OnInit } from '@angular/core';
import { RecibosService, Recibo } from '../services/recibos';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
@Component({
  selector: 'app-nuevo-recibo',
  templateUrl: './nuevo-recibo.page.html',
  styleUrls: ['./nuevo-recibo.page.scss'],
  standalone: false,
})
export class NuevoReciboPage {

  descripcion:string = '';
  monto: number = 0;
  foto: string = "";
  persona: string = "";
  personas = [
  'Juan Pérez',
  'María González',
  'Carlos López',
  'Ana Martínez',
  'Luis Rodríguez'
];
public photos: UserPhoto[]=[];

  constructor(private reciboService: RecibosService,      
    private router: Router) { }
  async tomarFoto(){
    const foto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source:CameraSource.Camera,
      quality: 100
    });
    this.photos.unshift({
      filepath: 'soon...',
      webviewPath: foto.webPath
    });
    this.foto = CameraResultType.DataUrl;
}
    guardarGasto(){
    if(!this.descripcion || !this.monto || !this.persona || this.foto){
      alert('Completa todos los campos');
      return;
    }
    const nuevoRecibo: Recibo ={
      descripcion : this.descripcion,
      monto : this.monto,
      persona: this.persona,
      foto: this.foto,
    };
    this.reciboService.agregarRecibo(nuevoRecibo);
     this.descripcion= '';
     this.monto = 0;
     this.foto="";
     this.persona= "";
  this.router.navigate(['/tabs/tab1']);
  }

}
export interface UserPhoto{
  filepath: string;
  webviewPath?: string;
}