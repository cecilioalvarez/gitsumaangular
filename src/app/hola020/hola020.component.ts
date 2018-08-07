import { Component, OnInit } from '@angular/core';
import{Libro} from "../negocio/libro";
@Component({
  selector: 'app-hola020',
  templateUrl: './hola020.component.html',
  styleUrls: ['./hola020.component.css']
})
export class Hola020Component implements OnInit {

  mensaje:string;
  libro:Libro;

  constructor() { }

  ngOnInit() {
  }

  cambiar(evento) {

    if (evento>5) {

      this.mensaje="has aprobado";
    }else {
      this.mensaje="";
    }
  }

  mostrarLibro(evento) {
    console.log("llega");
    console.log(evento);
    this.libro=evento;
  }
}
