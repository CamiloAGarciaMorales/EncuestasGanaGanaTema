import { Component, OnInit } from '@angular/core';
import { encuesta5 } from '../modelos/modelosinterface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EncuestaServiceService } from '../api/encuesta-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encuesta5',
  templateUrl: './encuesta5.component.html',
  styleUrls: ['./encuesta5.component.css']
})
export class Encuesta5Component implements OnInit {

  focus: any;
  focus1: any;
  arrayFormularios= []
  formCompleto : FormGroup
  constructor(public formularioCompleto: FormBuilder, public api:EncuestaServiceService, public router:Router) { 
    this.formCompleto = this.formularioCompleto.group(
      {

        // Datos Solicitud
        cedula:['', Validators.required],
        pregunta1: ['', Validators.required],
        pregunta2: ['', Validators.required],
        pregunta3: ['', Validators.required],
        pregunta4: ['', Validators.required],
        pregunta5: ['', Validators.required],
        pregunta6: ['', Validators.required],
        pregunta7: ['', Validators.required],
        pregunta8: ['', Validators.required],
        pregunta9: ['', Validators.required],
        pregunta10: ['', Validators.required],
        pregunta11: ['', Validators.required],
        pregunta12: ['', Validators.required],
        pregunta13: ['', Validators.required],
        pregunta14: ['', Validators.required]
        
})
  }
  
  postForm(form) {
 
 
    let encuesta5: encuesta5 = {
      cedula:JSON.parse(localStorage.getItem('cedula')),
      e5_pregunta1:form.pregunta1,
      e5_pregunta2:form.pregunta2,
      e5_pregunta3:form.pregunta3,
      e5_pregunta4:form.pregunta4,
      e5_pregunta5:form.pregunta5,
      e5_pregunta6:form.pregunta6,
      e5_pregunta7:form.pregunta7,
      e5_pregunta8:form.pregunta8,
      e5_pregunta9:form.pregunta9,
      e5_pregunta10:form.pregunta10,
      e5_pregunta11:form.pregunta11,
      e5_pregunta12:form.pregunta12,
      e5_pregunta13:form.pregunta13,
      e5_pregunta14:form.pregunta14,

    }

    console.log(encuesta5);
    

     const body = new FormData();
     console.log(localStorage.getItem("encuesta1"))
     body.append('encuesta1' , localStorage.getItem("encuesta1"))
     body.append('encuesta2' , localStorage.getItem("encuesta2"))
     body.append('encuesta3' , localStorage.getItem("encuesta3"))
     body.append('encuesta4' , localStorage.getItem("encuesta4"))
     body.append('encuesta5' ,  JSON.stringify(encuesta5))
    this.api.postEncuesta1(body).subscribe((res:any) => {
      console.log(res);
      //localStorage.clear();
      this.router.navigate(['/admin'])
     })

     
     

}

  ngOnInit(): void {
    
  }

}
