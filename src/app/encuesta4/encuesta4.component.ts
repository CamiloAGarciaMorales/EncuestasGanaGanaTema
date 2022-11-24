import { Component, OnInit } from '@angular/core';
import { encuesta4 } from '../modelos/modelosinterface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EncuestaServiceService } from '../api/encuesta-service.service';

@Component({
  selector: 'app-encuesta4',
  templateUrl: './encuesta4.component.html',
  styleUrls: ['./encuesta4.component.css']
})
export class Encuesta4Component implements OnInit {
  focus: any;
  focus1: any;
  formCompleto : FormGroup
  constructor(public formularioCompleto: FormBuilder, private router:Router, public api : EncuestaServiceService ) { 
    this.formCompleto = this.formularioCompleto.group(
      {

        //Datos Solicitud
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
        pregunta14: ['', Validators.required],
        pregunta15: ['', Validators.required],
        pregunta16: ['', Validators.required],
        pregunta17: ['', Validators.required],
        pregunta18: ['', Validators.required],
        pregunta19: ['', Validators.required],
        pregunta20: ['', Validators.required],
        pregunta21: ['', Validators.required]
        
})
  }

  
  postForm(form) {
 
    let encuesta4: encuesta4 = {
      cedula:JSON.parse(localStorage.getItem('cedula')),
      e4_pregunta1:form.pregunta1,
      e4_pregunta2:form.pregunta2,
      e4_pregunta3:form.pregunta3,
      e4_pregunta4:form.pregunta4,
      e4_pregunta5:form.pregunta5,
      e4_pregunta6:form.pregunta6,
      e4_pregunta7:form.pregunta7,
      e4_pregunta8:form.pregunta8,
      e4_pregunta9:form.pregunta9,
      e4_pregunta10:form.pregunta10,
      e4_pregunta11:form.pregunta11,
      e4_pregunta12:form.pregunta12,
      e4_pregunta13:form.pregunta13,
      e4_pregunta14:form.pregunta14,
      e4_pregunta15:form.pregunta15,
      e4_pregunta16:form.pregunta16,
      e4_pregunta17:form.pregunta17,
      e4_pregunta18:form.pregunta18,
      e4_pregunta19:form.pregunta19,
      e4_pregunta20:form.pregunta20,
      e4_pregunta21:form.pregunta21,
  
    }

    localStorage.setItem('encuesta4', JSON.stringify(encuesta4));
    this.router.navigate(['/encuesta5'])

    
}

  ngOnInit(): void {
  }

}
