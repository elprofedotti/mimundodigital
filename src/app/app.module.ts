import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarruselComponent } from './carrusel/carrusel.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { FormsModule } from '@angular/forms';
import { RegistroNovedadesComponent } from './registro-novedades/registro-novedades.component';

import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { ListadoRecursosComponent } from './listado-recursos/listado-recursos.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    HabilidadesComponent,
    CarruselComponent,
    FormularioContactoComponent,
    RegistroNovedadesComponent,
    MenuSuperiorComponent,
    ListadoRecursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
