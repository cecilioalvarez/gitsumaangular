import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {

  nota:number;
  asignatura:string;
  edad:number;
  constructor() { 
    this.asignatura="matematicas";
    this.nota=5;
    this.edad=18;
  }

  ngOnInit() {
  }

}
