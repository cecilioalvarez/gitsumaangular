import { Component, OnInit } from '@angular/core';
import {Persona} from "../negocio/persona";
@Component({
  selector: 'app-hola004',
  templateUrl: './hola004.component.html',
  styleUrls: ['./hola004.component.css']
})
export class Hola004Component implements OnInit {

  yo:Persona;
  constructor() {


    this.yo= new Persona("pepe");
   }

  ngOnInit() {
  }

}
