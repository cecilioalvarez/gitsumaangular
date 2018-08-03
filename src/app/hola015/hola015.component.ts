import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola015',
  templateUrl: './hola015.component.html',
  styleUrls: ['./hola015.component.css']
})
export class Hola015Component implements OnInit {

  fecha=new Date();
  texto:string="hola";
  numero:number=12000.23456;

  constructor() { }

  ngOnInit() {
  }

}
