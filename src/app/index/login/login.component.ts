import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EncuestaServiceService } from '../../api/encuesta-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  formLogin : FormGroup
  constructor(public formularioCompleto: FormBuilder, public api:EncuestaServiceService, private router : Router) 
  {
    this.formLogin = this.formularioCompleto.group(
      {

        // Datos Solicitud
        user: ['', Validators.required],
        password: ['', Validators.required]
        
})
   }

  login(form)
  {
    this.api.postlogin(form).subscribe((res:any) => {
      console.log(res)
      if(res.statusCode==200)
      {
        sessionStorage.setItem('token','abcd')

        window.alert("Bienvenido/a")

        this.router.navigate(['/admin'])
      }
      else{window.alert("Usuario o contraseña incorrecta")} 
     })
   
    


  }

  ngOnInit() {
  }

}
