import { Component, OnInit } from '@angular/core';
import { encuesta1, encuesta2, encuesta5 } from '../modelos/modelosinterface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EncuestaServiceService } from '../api/encuesta-service.service';
import { Router } from '@angular/router';
import { BoundAttribute } from '@angular/compiler/src/render3/r3_ast';



@Component({
  selector: 'app-encuesta2',
  templateUrl: './encuesta2.component.html',
  styleUrls: ['./encuesta2.component.css']
})
export class Encuesta2Component implements OnInit {
  focus: any;
  focus1: any;
  formCompleto : FormGroup
  prueba = []
  encuesta1 : any
  constructor(public formularioCompleto: FormBuilder , public api:EncuestaServiceService , private router:Router)  {
    this.formCompleto = this.formularioCompleto.group(
      {

        //Datos Solicitud
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
        pregunta14: ['', Validators.required],
        pregunta15: ['', Validators.required]
        
})
   }

   postForm(form) {
    
     let encuesta2: encuesta2 = {
      cedula:JSON.parse(localStorage.getItem('cedula')),
      e2_pregunta1:form.pregunta1,
      e2_pregunta2:form.pregunta2,
      e2_pregunta3:form.pregunta3,
      e2_pregunta4:form.pregunta4,
      e2_pregunta5:form.pregunta5,
      e2_pregunta6:form.pregunta6,
      e2_pregunta7:form.pregunta7,
      e2_pregunta8:form.pregunta8,
      e2_pregunta9:form.pregunta9,
      e2_pregunta10:form.pregunta10,
      e2_pregunta11:form.pregunta11,
      e2_pregunta12:form.pregunta12,
      e2_pregunta13:form.pregunta13,
      e2_pregunta14:form.pregunta14,
      e2_pregunta15:form.pregunta15
     }
     
     localStorage.setItem('encuesta2', JSON.stringify(encuesta2));
     this.router.navigate(['/encuesta3'])
 }
 
 
 
  ngOnInit(): void {
     
    }

}
