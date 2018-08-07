import { Component, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-hola021',
  templateUrl: './hola021.component.html',
  styleUrls: ['./hola021.component.css']
})
export class Hola021Component implements OnInit {
  nota:number=0;

  @Output()
  cambioNota:EventEmitter<number>= new EventEmitter<number>();
  //@Output()
  //crearLibro:EventEmitter<Libro>= new EventEmitter<Libro>();
  
  constructor() { }



  ngOnInit() {
  }

  incrementar() {

    this.nota++;

    this.cambioNota.emit(this.nota);
  }

  decrementar() {
    this.nota--;

    this.cambioNota.emit(this.nota);
  }

  lanzarLibro() {

   // let l= new Libro("titulo5","autor5",200,"java");
   // this.crearLibro.emit(l);
  }

}
