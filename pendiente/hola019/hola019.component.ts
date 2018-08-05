import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hola019',
  templateUrl: './hola019.component.html',
  styleUrls: ['./hola019.component.css']
})
export class Hola019Component implements OnInit {

  @Input() texto:string;

  constructor() { }

  ngOnInit() {
  }

}
