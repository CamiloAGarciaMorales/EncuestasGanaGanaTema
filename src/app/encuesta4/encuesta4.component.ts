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
 
    let encuesta2: encuesta4 = {
      pregunta1:form.pregunta1,
      pregunta2:form.pregunta2,
      pregunta3:form.pregunta3,
      pregunta4:form.pregunta4,
      pregunta5:form.pregunta5,
      pregunta6:form.pregunta6,
      pregunta7:form.pregunta7,
      pregunta8:form.pregunta8,
      pregunta9:form.pregunta9,
      pregunta10:form.pregunta10,
      pregunta11:form.pregunta11,
      pregunta12:form.pregunta12,
      pregunta13:form.pregunta13,
      pregunta14:form.pregunta14,
      pregunta15:form.pregunta15,
      pregunta16:form.pregunta16,
      pregunta17:form.pregunta17,
      pregunta18:form.pregunta18,
      pregunta19:form.pregunta19,
      pregunta20:form.pregunta20,
      pregunta21:form.pregunta21
    }

    localStorage.setItem('encuesta4', JSON.stringify(form));
    this.router.navigate(['/encuesta5'])

    
}

  ngOnInit(): void {
  }

}
