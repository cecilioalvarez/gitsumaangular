import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Libro } from '../negocio/libro';
import { LibroRESTService } from '../libro-rest.service';

@Component({
  selector: 'app-hola013',
  templateUrl: './hola013.component.html',
  styleUrls: ['./hola013.component.css']
})
export class Hola013Component implements OnInit {

  listaLibros:Libro[];
  nuevoLibro:Libro= new Libro();
  

  constructor(miservicio:LibroRESTService) {

    //recogemos la promesa
    //la resolvemos
     miservicio.findAll().then((datos)=>{
      console.log(datos);
      this.listaLibros=datos as Libro[];
     });


   }

  ngOnInit() {
  }

  insertar() {

    console.log(this.nuevoLibro);
  }

}
