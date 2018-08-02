import { Component, OnInit } from '@angular/core';
import { Persona } from '../negocio/persona';

@Component({
  selector: 'app-hola006',
  templateUrl: './hola006.component.html',
  styleUrls: ['./hola006.component.css']
})
export class Hola006Component implements OnInit {

  listaPersonas:Persona[]=[];

  constructor() { 

    let p1= new Persona("pepe","perez",20);
    let p2= new Persona("juan","sanchez");
    this.listaPersonas.push(p1);
    this.listaPersonas.push(p2);


  }

  ngOnInit() {
  }

}
