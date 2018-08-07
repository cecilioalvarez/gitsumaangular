import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-hola-router4',
  templateUrl: './hola-router4.component.html',
  styleUrls: ['./hola-router4.component.css']
})
export class HolaRouter4Component implements OnInit {

  nombre:string;
  constructor(rutaActiva:ActivatedRoute) {

    rutaActiva.params.subscribe(params=>{

      this.nombre=params["nombre"];
    })


   }

  ngOnInit() {
  }

}
