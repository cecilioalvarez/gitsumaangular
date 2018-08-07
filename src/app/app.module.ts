import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
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
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Hola014Component } from './hola014/hola014.component';
import { Hola015Component } from './hola015/hola015.component';
import { Hola016Component } from './hola016/hola016.component';
import { Hola017Component } from './hola017/hola017.component';
import { PorcentajePipe } from './porcentaje.pipe';
import { Hola018Component } from './hola018/hola018.component';
import { Hola019Component } from './hola019/hola019.component';
import { Hola020Component } from './hola020/hola020.component';
import { Hola021Component } from './hola021/hola021.component';
import { HolaRouter1Component } from './hola-router1/hola-router1.component';
import { HolaRouter2Component } from './hola-router2/hola-router2.component';
import { HolaRouter3Component } from './hola-router3/hola-router3.component';
import { RouterModule, Routes } from '@angular/router';
import { HolaRouter4Component } from './hola-router4/hola-router4.component';
import { HolaRouter5Component } from './hola-router5/hola-router5.component';
import { VacioComponent } from './vacio/vacio.component';
import { HolaRouter6Component } from './hola-router6/hola-router6.component';
import { HolaRouter7Component } from './hola-router7/hola-router7.component';
import { HolaRouter8Component } from './hola-router8/hola-router8.component';



const rutas: Routes = [
  { path: 'c1', component: HolaRouter1Component },
  { path: 'c2', component: HolaRouter2Component },
  { path: 'c3', component: HolaRouter3Component },
  { path: 'c4/:nombre', component: HolaRouter4Component },
  { path: 'c5/:nombre/:apellidos', component: HolaRouter5Component },
  { path: '', redirectTo: '/c1', pathMatch: 'full' },
  { path: 'nuevo' ,

  children: [

    {
      path: "c6",
      component: HolaRouter6Component
    },
    {
      path: "c7",
      component: HolaRouter7Component
    }, {
      path: "c8",
      component: HolaRouter8Component
    },

  ]},
  
  { path: '**', component: VacioComponent },
];


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
    Hola016Component,
    Hola017Component,
    PorcentajePipe,
    Hola018Component,
    Hola019Component,
    Hola020Component,
    Hola021Component,
    HolaRouter1Component,
    HolaRouter2Component,
    HolaRouter3Component,
    HolaRouter4Component,
    HolaRouter5Component,
    VacioComponent,
    HolaRouter6Component,
    HolaRouter7Component,
    HolaRouter8Component
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(
      rutas,
      { enableTracing: true } // <-- tareas de debug
    )
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {




}
