import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EncuestaServiceService {
  arrayFormularios= []
  
  url:string =  "http://10.250.9.41:3000/api/encuestas/formulario/"

  constructor(private http:HttpClient) { }
  

  postEncuesta1(form)
  {
    return this.http.post(this.url , form)
  }

}
