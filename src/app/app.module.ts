import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormularioNuevoComponent } from './formulario-nuevo/formulario-nuevo.component';
import { DetalleComponent } from './detalle/detalle.component';

const rutas: Routes = [
  { path: 'lista', component: ListaComponent },
  //paso 2
    { path: '', redirectTo: "lista" ,pathMatch:"full"},
    //paso 3
    { path: 'formularioNuevo', component:FormularioNuevoComponent},
    { path: 'detalle', component:DetalleComponent}
];


@NgModule({
  declarations: [
    AppComponent,

    ListaComponent,

    FormularioNuevoComponent,

    DetalleComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot(
      rutas,
      { enableTracing: true } // <-- tareas de debug
    )
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
