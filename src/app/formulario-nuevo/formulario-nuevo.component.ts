import { Component, OnInit } from '@angular/core';
import { Libro } from '../negocio/libro';
import { LibroRESTService } from '../libro-rest.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-nuevo',
  templateUrl: './formulario-nuevo.component.html',
  styleUrls: ['./formulario-nuevo.component.css']
})
export class FormularioNuevoComponent implements OnInit {
  nuevoLibro:Libro= new Libro();

  constructor(private servicio: LibroRESTService,private ruta:Router) {


  }

  ngOnInit() {
  }

  insertar() {

    this.servicio.insert(this.nuevoLibro).then((datos) => {

        this.ruta.navigate(["lista"]);
    });
  }
}
