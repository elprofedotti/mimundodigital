import { Component } from '@angular/core';


export interface Recurso{
  nombre:string;
  url:string;
}
@Component({
  selector: 'app-listado-recursos',
  templateUrl: './listado-recursos.component.html',
  styleUrls: ['./listado-recursos.component.css']
})
export class ListadoRecursosComponent {
  recursos: Recurso[] = [
    {nombre:'El mundo del yoga', url:'https://elmundodelyoga.com'},
    {nombre:'El mundo de la programacion', url:'https://elmundodelaprogramacion.com'},
  ];
  nuevoRecurso: Recurso =  { nombre: '', url: '' };

  agregarRecurso() {
    this.recursos.push({ ...this.nuevoRecurso });
    this.nuevoRecurso = { nombre: '', url: '' }; // resetea el formulario
  }
}
