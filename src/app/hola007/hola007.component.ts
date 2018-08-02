import { Component, OnInit } from '@angular/core';
import { Persona } from '../negocio/persona';

@Component({
  selector: 'app-hola007',
  templateUrl: './hola007.component.html',
  styleUrls: ['./hola007.component.css']
})
export class Hola007Component implements OnInit {

  lista:string[]=["hola","que","tal","estas"];
  listaPersonas:Persona[]=[];
  seleccionado:string;
  seleccionadoPersona:Persona;
  constructor() { 


    let p1= new Persona("pepe","perez",20);
    let p2= new Persona("juan","sanchez");
    this.listaPersonas.push(p1);
    this.listaPersonas.push(p2);
  }

  ngOnInit() {
  }

  onCambio(valor:string) {

    this.seleccionado=valor;
  }
  
  onCambioPersona(persona:Persona) {

    this.seleccionadoPersona=persona;
  }

}
