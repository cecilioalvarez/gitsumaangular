import { Component, OnInit } from '@angular/core';
import { Persona } from '../negocio/persona';

@Component({
  selector: 'app-hola011',
  templateUrl: './hola011.component.html',
  styleUrls: ['./hola011.component.css']
})
export class Hola011Component implements OnInit {

  listaPersonas:Persona[]=[];
  constructor() {

    let p1= new Persona("pepe","perez",20);
    let p2= new Persona("juan","sanchez",30);
    let p3= new Persona("ana","gomez",25);
    let p4= new Persona("maria","blanco",20);
    this.listaPersonas.push(p1);
    this.listaPersonas.push(p2);
    this.listaPersonas.push(p3);
    this.listaPersonas.push(p4);
   }

  ngOnInit() {
  }

}
