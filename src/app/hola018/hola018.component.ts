import { Component, OnInit, ViewChild } from '@angular/core';
import { Hola019Component } from '../hola019/hola019.component';

@Component({
  selector: 'app-hola018',
  templateUrl: './hola018.component.html',
  styleUrls: ['./hola018.component.css']
})
export class Hola018Component implements OnInit {

  @ViewChild(Hola019Component)
  componente:Hola019Component

  constructor() { }

  ngOnInit() {
  }

  pulsar() {

    this.componente.texto="hemos pulsado el boton";
  }

}
