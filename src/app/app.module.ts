import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PersonaComponent } from './componentes/persona/persona.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PersonaComponent,
    ProductoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
