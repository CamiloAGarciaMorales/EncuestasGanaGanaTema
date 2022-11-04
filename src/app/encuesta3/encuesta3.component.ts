import { Component, OnInit } from '@angular/core';
import { encuesta3 } from '../modelos/modelosinterface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encuesta3',
  templateUrl: './encuesta3.component.html',
  styleUrls: ['./encuesta3.component.css']
})

export class Encuesta3Component implements OnInit {
  focus: any;
  focus1: any;
  formCompleto : FormGroup
  constructor(public formularioCompleto: FormBuilder, private router:Router) { 
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
 
 
    let encuesta2: encuesta3 = {
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
      pregunta15:form.pregunta15
    }

    localStorage.setItem('encuesta3', JSON.stringify(form));
    this.router.navigate(['/encuesta4'])
}

  ngOnInit(): void {
  }

}
