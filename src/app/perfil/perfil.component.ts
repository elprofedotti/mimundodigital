import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  nombreusuario: string='@elprofedotti';
  ocupacion: string = 'Desarrollador Fullstack';
  ensenia: string='Docente de informática nivel medio';
  hobby: string='Practicante y profesor de BUDO YOGA';
  
  constructor(){}
  
  ngOnInit(): void {
    //inicializo algo aca de ser necedsario
  }

}
