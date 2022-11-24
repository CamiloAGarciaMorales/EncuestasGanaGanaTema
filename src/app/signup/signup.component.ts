import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EncuestaServiceService } from '../api/encuesta-service.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    focus2;
   public  formSignup : FormGroup
    constructor(public formularioCompleto: FormBuilder, public api:EncuestaServiceService, public router:Router) 
    {
        this.formSignup = this.formularioCompleto.group(
            {
              // Datos Solicitud
              user: ['', Validators.required],
              password: ['', Validators.required],
              confirmarPassword: ['', Validators.required]
              
      })
     }
     signup(form)
     {
        if(form.password==form.confirmarPassword)
        {
            console.log(form)
            this.api.postSignup(form).subscribe((res:any) => {
                console.log(res.statusCode)
                if(res.statusCode==200)
                {
                  window.alert("Usuario Creado con exito")
                  this.router.navigate(['/login'])
                }
                else{window.alert("El usuario ya existe")}
                
               })
        }
        

     }

    ngOnInit() {}
}
