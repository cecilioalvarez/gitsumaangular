import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Libro } from './negocio/libro';
@Injectable({
  providedIn: 'root'
})
export class LibroRESTService {

  constructor(private miservicio:HttpClient) { }

  //sino que se ejecuta directo
  // y devolvia vacio
  findAll():Promise<Libro[]>{
    //invocavamos al get
    //tarde un segundo en ejecutar porque hace una peticion
    //ajax
    return this.miservicio
    .get<Libro[]>("http://localhost:3000/libros").toPromise();
  }

  insert(libro:Libro):Promise<Libro> {

    return this
    .miservicio
    .post("http://localhost:3000/libros",libro)
    .toPromise();
  }
  delete(libro:Libro):Promise<Libro> {

    return this.miservicio.delete<Libro>("http://localhost:3000/libros/"+libro.titulo).toPromise();
  }

  findOne(titulo:string):Promise<Libro> {

    return this.miservicio.get<Libro>("http://localhost:3000/libros/"+titulo).toPromise();
  }

}
