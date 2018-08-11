import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola022',
  templateUrl: './hola022.component.html',
  styleUrls: ['./hola022.component.css']
})
export class Hola022Component implements OnInit {

  fecha:Date;
  constructor() { 

    this.fecha= new Date();
  }

  ngOnInit() {
  }

}
