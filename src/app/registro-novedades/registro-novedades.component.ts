import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-novedades',
  templateUrl: './registro-novedades.component.html',
  styleUrls: ['./registro-novedades.component.css']
})
export class RegistroNovedadesComponent {
  correo: string | undefined;

  registrar() {
    // Aquí puedes añadir el código para agregar el correo a una lista de novedades
    console.log(`Correo para novedades: ${this.correo}`);
}
}
