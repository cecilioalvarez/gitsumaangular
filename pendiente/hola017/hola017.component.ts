import { Component, OnInit } from '@angular/core';
import { LibroRestPromesaService } from '../libro-rest-promesa.service';
import { Libro } from '../negocio/libro';
import { LibroRESTService } from '../libro-rest.service';
import { FachadaLibrosService } from '../fachada-libros.service';

@Component({
  selector: 'app-hola017',
  templateUrl: './hola017.component.html',
  styleUrls: ['./hola017.component.css']
})
export class Hola017Component implements OnInit {

  listaLibros:Libro[]=[];
  constructor(private servicio:FachadaLibrosService) { 
   
   
   servicio.findLibrosPorTitulos("titulo1","titulo2").then((datos)=> {

      let lista:Libro[]=[];
      lista.push(datos[0]);
      lista.push(datos[1]);
      this.listaLibros=lista;
})


  }

  ngOnInit() {
  }

}
