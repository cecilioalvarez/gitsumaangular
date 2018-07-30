import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola002',
  templateUrl: './hola002.component.html',
  styleUrls: ['./hola002.component.css']
})
export class Hola002Component implements OnInit {

  contador:number=0;
  constructor() { }

  ngOnInit() {
  }
  pulsar() {

    alert("has pulsado el boton");
  }

  incrementar() {
    this.contador++;
  }
  decrementar() {
    this.contador--;
  }
  modificar(numero:number) {

    this.contador=this.contador+ numero;

  }

}
