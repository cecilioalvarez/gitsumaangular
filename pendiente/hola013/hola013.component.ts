import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Libro } from '../negocio/libro';
import { LibroRESTService } from '../libro-rest.service';

@Component({
  selector: 'app-hola013',
  templateUrl: './hola013.component.html',
  styleUrls: ['./hola013.component.css']
})
export class Hola013Component implements OnInit {

  listaLibros: Libro[];
  nuevoLibro: Libro = new Libro();
  //a este nivel pero privada


  constructor(private miservicio: LibroRESTService) {

    //recogemos la promesa
    //la resolvemos
    miservicio.findAll().then((datos) => {
      console.log(datos);
      this.listaLibros = datos as Libro[];
    });

  }

  ngOnInit() {
  }

  insertar() {

    this.miservicio.insert(this.nuevoLibro).then((datos) => {


      this.nuevoLibro = new Libro();
      //promesa
      return this.miservicio.findAll();
    }).then((datos) => {

      this.listaLibros = datos as Libro[];

    })
  }

  borrar(libro: Libro) {
    //asincronas
    this.miservicio.delete(libro).then((datos) => {

      //promesa
      return this.miservicio.findAll();
      /*
      miservicio.findAll().then((datos)=>{
        console.log(datos);
        this.listaLibros=datos as Libro[];
       });*/

    }).then((datos) => {

      this.listaLibros = datos as Libro[];

    })

  }
}
