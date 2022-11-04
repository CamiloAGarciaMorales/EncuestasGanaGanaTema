import { Component, OnInit } from '@angular/core';
import { encuesta5 } from '../modelos/modelosinterface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EncuestaServiceService } from '../api/encuesta-service.service';

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
  constructor(public formularioCompleto: FormBuilder, public api:EncuestaServiceService) { 
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
        pregunta14: ['', Validators.required]
        
})
  }
  
  postForm(form) {
 
 
    let encuesta5: encuesta5 = {
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
      pregunta14:form.pregunta14 
    }

    console.log(encuesta5.pregunta14);
    

     const body = new FormData();
     console.log(localStorage.getItem("encuesta1"))
     body.append('encuesta1' , localStorage.getItem("encuesta1"))
     body.append('encuesta2' , localStorage.getItem("encuesta2"))
     body.append('encuesta3' , localStorage.getItem("encuesta3"))
     body.append('encuesta4' , localStorage.getItem("encuesta4"))
     body.append('encuesta5' ,  JSON.stringify(encuesta5))
    this.api.postEncuesta1(encuesta5).subscribe((res:any) => {
      console.log(res);
     })

     console.log(encuesta5);
     

}

  ngOnInit(): void {
    
  }

}
