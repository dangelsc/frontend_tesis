import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nombre:String;
  edad:Number;
  a:Number;
  b:Number;
  texto:String;
  mostra:boolean;
  lista=[
      {nombre:'teodoro1',edad:11},
      {nombre:'teodoro2',edad:12},
      {nombre:'teodoro3',edad:13},
      {nombre:'teodoro4',edad:14},
      {nombre:'teodoro5',edad:15},
      {nombre:'teodoro6',edad:16},
      {nombre:'teodoro7',edad:17},
    ];;
  constructor() { 
    this.nombre="pepito";    
    this.edad=55;
    this.a=this.b=0;
    console.log(this.lista);
    this.mostra=true;
    this.texto="Ocultar?";
  }

  ngOnInit(): void {
  }
  click_suma(){
    console.log('hola');
    this.a = this.a + 1;
    console.log(this.a);
  }
  click_ocultar(){
    this.mostra=!this.mostra;
    if(this.texto==="Ocultar?")
      this.texto="mostrar!";
    else
      this.texto="Ocultar?";
  }

}
