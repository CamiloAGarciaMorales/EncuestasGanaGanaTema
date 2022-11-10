import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EncuestaServiceService } from '../../api/encuesta-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  formLogin : FormGroup
  constructor(public formularioCompleto: FormBuilder, public api:EncuestaServiceService) 
  {
    this.formLogin = this.formularioCompleto.group(
      {

        // Datos Solicitud
        usuario: ['', Validators.required],
        password: ['', Validators.required]
        
})
   }

  login(form)
  {
    this.api.postlogin(form).subscribe((res:any) => {
      if(res==200)
      {
        
      }
     })
    console.log(form)


  }

  ngOnInit() {
  }

}
