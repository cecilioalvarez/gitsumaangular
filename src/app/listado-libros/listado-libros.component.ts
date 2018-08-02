import { Component, OnInit } from '@angular/core';
import { Libro } from '../negocio/libro';
import { LibroService } from '../libro.service';
import * as _ from "lodash";

@Component({
  selector: 'app-listado-libros',
  templateUrl: './listado-libros.component.html',
  styleUrls: ['./listado-libros.component.css']
})
export class ListadoLibrosComponent implements OnInit {

  _listaLibros:Libro[]=[];
  nuevoLibro:Libro= new Libro();
  seleccionado:Libro;
  filtroTitulo:string;
  ordenar:string;

  get listaLibros():Libro[] {

    console.log("filtro %s",this.filtroTitulo);

    this._listaLibros=this.ordenarLibros();
    console.log(this._listaLibros);
    
    if (this.filtroTitulo==undefined) {

      return this._listaLibros;
    }else {
      

   
      console.log(this._listaLibros);
      return this._listaLibros.filter((l:Libro)=>{

        return l.titulo.startsWith(this.filtroTitulo);

      });
    }
   
  }

  set listaLibros(listaLibros:Libro[]) {

  
    this._listaLibros=listaLibros;
  }

  estaSeleccionado(libro:Libro) {

    return libro==this.seleccionado;
  }
  /*
  filtroPorTitulo() {

    //console.log(this.filtroTitulo);
    this.listaLibros=this.listaLibros.filter((l:Libro)=>{

          return l.titulo.startsWith(this.filtroTitulo);

    });

  }*/
  constructor(private miservicio:LibroService) { 

    this.listaLibros= miservicio.findAll();  

  }
  borrar(libro:Libro) {

    console.log(libro);

    this.miservicio.delete(libro);


  }

  insertar() {

    this.miservicio.insert(this.nuevoLibro);
    this.nuevoLibro= new Libro();
  }

  ordenarLibros():Libro[] {

      if(this.ordenar==undefined) {

          return this._listaLibros;
      }else {
        

        return _.sortBy(this._listaLibros,this.ordenar);
        
  
      }

  }
 
  ngOnInit() {
  }

}
