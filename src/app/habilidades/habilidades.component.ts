import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidades: string[]=['JavaScript', 'Angular', 'Node.js', 'TypeScript'];
  hoveredIndex: number |null=null;
  @HostBinding('style.color') color: string='black';
  constructor(){}
  ngOnInit():void{}
  
  onMouseOver(index:number){
   this.hoveredIndex=index;
  }
  onMouseOut(){
    this.hoveredIndex=null;
    
  }
  agregarHabilidad(event:Event, inputElement: HTMLInputElement){
    event.preventDefault();
    const nuevaHabilidad=inputElement.value;
    if(nuevaHabilidad){
      this.habilidades.push(nuevaHabilidad);
      inputElement.value=''; //limpia el input
    }
  }
}
