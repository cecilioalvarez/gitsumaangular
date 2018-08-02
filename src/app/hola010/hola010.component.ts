import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola010',
  templateUrl: './hola010.component.html',
  styleUrls: ['./hola010.component.css']
})
export class Hola010Component implements OnInit {


  lista:string[]=["hola","que","tal","estas"];

  constructor() { }

  ngOnInit() {
  }

}
