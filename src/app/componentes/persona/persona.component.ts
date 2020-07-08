import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../services/usuario/usuario.service";
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  lista=[];
  show:boolean=false;
  error:string='';
  persona={
    nombre:'',
    a_paterno:'',
    a_materno:'',
    ci:'',
    login:'',
    password:''
  };
  constructor(protected  api:UsuarioService) {  }

  ngOnInit(): void {
    this.api.getLista().subscribe((servidor)=>{
      if(servidor.estado ==1){
        this.lista=servidor.dato;
      }else
        console.log(servidor.error);
    })
  }
  event_mostrar(){
    this.show=!this.show;
  }
  event_registro(){
    this.api.setNuevo(this.persona)
    .subscribe(servidor=>{
      if(servidor.estado==1){
        this.lista.push(servidor.dato);
        this.show=false;
        this.persona={
          nombre:'',
          a_paterno:'',
          a_materno:'',
          ci:'',
          login:'',
          password:''
        };
      }
      else{
        console.log('***');
        console.log(servidor.error);
        if(servidor.error.message)
          this.error=servidor.error.message;
      }
    });
  }

}
