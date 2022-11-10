import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EncuestaServiceService } from '../api/encuesta-service.service';

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
    formSignup : FormGroup
    constructor(public formularioCompleto: FormBuilder, public api:EncuestaServiceService) 
    {
        this.formSignup = this.formularioCompleto.group(
            {
              // Datos Solicitud
              usuario: ['', Validators.required],
              password: ['', Validators.required],
              confirmarPassword: ['', Validators.required]
              
      })
     }
     signup(form)
     {
        if(form.password==form.confirmarPassword)
        {
            this.api.postSignup(form).subscribe((res:any) => {
                if(res==200)
                {
                  
                }
               })
        }
        

     }

    ngOnInit() {}
}
