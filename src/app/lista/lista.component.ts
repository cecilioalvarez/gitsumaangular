import { Component, OnInit } from '@angular/core';
import { Libro } from '../negocio/libro';
import { LibroRESTService } from '../libro-rest.service';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  ngOnInit(): void {

  }
  listaLibros: Libro[] = [];

  constructor(private servicio: LibroRESTService) {

    servicio.findAll().then((datos) => {
      console.log(datos);
      this.listaLibros = datos;

    })

  }
  borrar(libro: Libro) {
    //asincronas
    this.servicio.delete(libro).then((datos) => {

      //promesa
      return this.servicio.findAll();


    }).then((datos) => {

      this.listaLibros = datos as Libro[];

    })

  }


}
