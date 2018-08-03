import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { Hola001Component } from './hola001/hola001.component';
import { Hola002Component } from './hola002/hola002.component';
import { Hola003Component } from './hola003/hola003.component';
import { Hola004Component } from './hola004/hola004.component';
import { Hola005Component } from './hola005/hola005.component';
import { NotaComponent } from './nota/nota.component';
import { Hola006Component } from './hola006/hola006.component';
import { Hola007Component } from './hola007/hola007.component';
import { Hola008Component } from './hola008/hola008.component';
import { Hola009Component } from './hola009/hola009.component';
import { Hola010Component } from './hola010/hola010.component';
import { Hola011Component } from './hola011/hola011.component';
import { Hola012Component } from './hola012/hola012.component';
import { ListadoLibrosComponent } from './listado-libros/listado-libros.component';
import { Hola013Component } from './hola013/hola013.component';
import {HttpClient,HttpClientModule} from "@angular/common/http";
import { Hola014Component } from './hola014/hola014.component';
import { Hola015Component } from './hola015/hola015.component';
import { Hola016Component } from './hola016/hola016.component';


@NgModule({
  declarations: [
    AppComponent,
    Hola001Component,
    Hola002Component,
    Hola003Component,
    Hola004Component,
    Hola005Component,
    NotaComponent,
    Hola006Component,
    Hola007Component,
    Hola008Component,
    Hola009Component,
    Hola010Component,
    Hola011Component,
    Hola012Component,
    ListadoLibrosComponent,
    Hola013Component,
    Hola014Component,
    Hola015Component,
    Hola016Component
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
