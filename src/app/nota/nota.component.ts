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
    this.edad=16;
  }

  esMuyListo():boolean {

      if((this.nota>=9 && this.asignatura=='matematicas') || (this.edad==16) ) {
            return true;
      }else {
        return false;
      }
  }

  ngOnInit() {
  }

}
