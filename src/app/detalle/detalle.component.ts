import { Component, OnInit } from '@angular/core';
import { Libro } from '../negocio/libro';
import { LibroRESTService } from '../libro-rest.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  libro: Libro;
  constructor(private servicio: LibroRESTService,private rutaActiva:ActivatedRoute, private ruta:Router) {

    rutaActiva.params.subscribe(params=>{

      this.servicio.findOne(params["titulo"]).then((datos) => {

        this.libro = datos;
      });

    })

  }

  ngOnInit() {
  }

  volver() {

    this.ruta.navigate(["lista"]);
  }

}
