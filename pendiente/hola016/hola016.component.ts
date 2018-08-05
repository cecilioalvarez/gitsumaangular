import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Libro } from '../negocio/libro';
import { LibroRestPromesaService } from '../libro-rest-promesa.service';
@Component({
  selector: 'app-hola016',
  templateUrl: './hola016.component.html',
  styleUrls: ['./hola016.component.css']
})
export class Hola016Component implements OnInit {

  listaLibros:Libro[]=[];
  constructor(private  servicio:LibroRestPromesaService) { 
    /*
    servicio.get<Libro[]>("http://localhost:3000/libros").toPromise().then((datos)=>{

          var lista1:Libro[]=datos;
          //this.listaLibros=datos;

          servicio.get<Libro[]>("http://localhost:3000/libros2").toPromise().then((datos2)=> {

                var lista2:Libro[]=datos2;

                var superlista=lista1.concat(lista2);
                this.listaLibros=superlista;
          });
    })
    */
  
    Promise.all([servicio.findLibros1(),servicio.findLibros2()]).then((datos)=> {

          this.listaLibros=datos[0].concat(datos[1]);
    })

  }

  ngOnInit() {
  }

}
