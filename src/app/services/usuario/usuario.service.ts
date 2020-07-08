import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url:string="http://localhost:3000/api/usuario";
  constructor(protected http:HttpClient) { }
  getLista(){
    return this.http.get( this.url );
  }
  setNuevo(datos){
    return this.http.post(this.url,datos);
  }
}
