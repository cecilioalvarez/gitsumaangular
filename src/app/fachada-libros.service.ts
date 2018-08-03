import { Injectable } from '@angular/core';
import { LibroRESTService } from './libro-rest.service';
import { Libro } from './negocio/libro';

@Injectable({
  providedIn: 'root'
})
export class FachadaLibrosService {

  constructor(private libroREST:LibroRESTService) {
   }
   findLibrosPorTitulos(...titulos):Promise<Libro[]> {

    let listaPromesas=[];
    titulos.forEach((titulo)=> {

          listaPromesas.push(this.libroREST.findOne(titulo));
    })
    
   return Promise.all(listaPromesas);
  }
}
