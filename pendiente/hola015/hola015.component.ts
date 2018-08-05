import { Component, OnInit } from '@angular/core';
import { Libro } from '../negocio/libro';


@Component({
  selector: 'app-hola015',
  templateUrl: './hola015.component.html',
  styleUrls: ['./hola015.component.css']
})
export class Hola015Component implements OnInit {

  fecha=new Date();
  texto:string="hola que tal ";
  numero:number=12000.23456;
  importe:number=100;
  libro:Libro= new Libro ("titulo1","autor",200,"categoria");


  constructor() { }

  ngOnInit() {
  }

}
