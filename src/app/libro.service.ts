import { Injectable } from '@angular/core';
import { Libro } from './negocio/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  listaLibros:Libro[]=[];

  constructor() {

    this.listaLibros.push(new Libro("titulo1","autor1",100,"misterio"));
    this.listaLibros.push(new Libro("titulo2","autor2",100,"ciencia ficcion"));
    this.listaLibros.push(new Libro("titulo3","autor3",100,"fantasia"));
  
  }
  findAll():Libro[] {

    return this.listaLibros;

  }

  insert(libro:Libro) {

    this.listaLibros.push(libro);
  }

  delete(libro:Libro) {
    //programacion funcional hago un filtrado

    let libroBorrar=this.listaLibros.filter((l:Libro)=> {


          return libro.titulo==l.titulo;
    })[0];

    let indice= this.listaLibros.indexOf(libroBorrar);
    this.listaLibros.splice(indice,1);
  }
}
