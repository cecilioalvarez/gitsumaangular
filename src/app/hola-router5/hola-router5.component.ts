import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-hola-router5',
  templateUrl: './hola-router5.component.html',
  styleUrls: ['./hola-router5.component.css']
})
export class HolaRouter5Component implements OnInit {

  nombre:string;
  apellidos:string;
  constructor(rutaActiva:ActivatedRoute) {

    rutaActiva.params.subscribe(params=>{

      this.nombre=params["nombre"];
      this.apellidos=params["apellidos"];
    })


   }


  ngOnInit() {
  }

}
