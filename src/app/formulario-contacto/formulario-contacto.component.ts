import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})

export class FormularioContactoComponent {
  
  nombre: string | undefined;
  email: string | undefined;
  asunto: string | undefined;
  mensaje: string | undefined;
  enviarFormulario() {
    const datosFormulario = {
      nombre: this.nombre,
      email: this.email,
      asunto: this.asunto,
      mensaje: this.mensaje
    };
    // Aquí puedes añadir el código para enviar estos datos a un servidor o por correo electrónico
    console.log(datosFormulario);
}

}
