import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola001',
  templateUrl: './hola001.component.html',
  styleUrls: ['./hola001.component.css']
})
export class Hola001Component implements OnInit {

  mensaje:string;
  importe:number;
  urlImagen:string="/assets/naturaleza.jpg";

  constructor() {

    this.mensaje="hola desde un componente";
    this.importe=100;
    
   }

  ngOnInit() {
  }

  calcularIva() {
    return this.importe*1.21;
  }

}
