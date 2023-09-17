import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit{

  slides=[
  {
    img: '../assets/images/imagen1.png', 
    title: 'Bienvenido a mi Mundo Digital',
    desc: 'Pasión por la tecnología, compromiso con la excelencia. Bienvenido a la página donde comparto mi experiencia, conocimientos y servicios en el mundo de la informática.',
    link: '#',
    btn: 'Descubre más',
    pos: 'text-start'
  },
  {
    img: '../assets/images/imagen2.png', 
    title: 'Servicios Informáticos de Calidad.',
    desc: 'Con más de dos décadas de experiencia, brindo servicios informáticos integrales para satisfacer todas tus necesidades tecnológicas.',
    link: '#',
    btn: 'Ver servicios',
    pos: ''
  },
  {
    img: '../assets/images/imagen3.png', 
    title: 'Compartiendo Conocimiento.',
    desc: 'La educación es el arma más poderosa para cambiar el mundo. Descubre mis cursos y talleres destinados a todas las edades.',
    link: '#',
    btn: 'Ver cursos',
    pos: 'text-end'
  }
  ];
  
  activeSlideIndex=0;
  
  ngOnInit() {
    console.log('ngOnInit se llamo OK');//verifico q se esta ejecutando OnInit
    setInterval(() => {
      console.log('seteo de nuevo slide');//verifico si el intervalo se ejecuta
      this.activeSlideIndex++;
      console.log('nuevo activeSlideIndex');//verifico nuevo valor de indice
      
      if (this.activeSlideIndex >= this.slides.length){
        this.activeSlideIndex=0;
      }
    }, 3000);//cambia cada 3 segundos
  }
}
