import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from './negocio/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroRestPromesaService {

  constructor(private servicio:HttpClient) { 
    
  }

  findLibros1():Promise<Libro[]> {

   return this.servicio.get<Libro[]>("http://localhost:3000/libros").toPromise();

  }

  findLibros2():Promise<Libro[]> {

    return this.servicio.get<Libro[]>("http://localhost:3000/libros2").toPromise();

  }

}
