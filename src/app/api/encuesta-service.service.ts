import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EncuestaServiceService {
  arrayFormularios= []
  
  url:string =  "http://localhost:3000/api/encuestas/formulario/"
  urlLogin:string =  "http://localhost:3000/api/encuestas/aut/login"
  urlSignup:string =  "http://localhost:3000/api/encuestas/aut/signup"

  constructor(private http:HttpClient) { }
  

  postEncuesta1(form)
  {
    return this.http.post(this.url , form)
  }
  postlogin(form)
  {
    return this.http.post(this.urlLogin , form)
  }
  postSignup(form)
  {
    return this.http.post(this.urlSignup , form)
  }

}
