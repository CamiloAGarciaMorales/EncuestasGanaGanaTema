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
        pregunta15: ['', Validators.required],
        pregunta16: ['', Validators.required],
        pregunta17: ['', Validators.required],
        pregunta18: ['', Validators.required],
        pregunta19: ['', Validators.required],
        pregunta20: ['', Validators.required],
        pregunta21: ['', Validators.required],
        pregunta22: ['', Validators.required],
        pregunta23: ['', Validators.required],
        pregunta24: ['', Validators.required],
        pregunta25: ['', Validators.required],
        pregunta26: ['', Validators.required],
        pregunta27: ['', Validators.required],
        pregunta28: ['', Validators.required],
        pregunta29: ['', Validators.required],
        pregunta30: ['', Validators.required],
        pregunta31: ['', Validators.required],
        pregunta32: ['', Validators.required],
        pregunta33: ['', Validators.required],
        pregunta34: ['', Validators.required],
        pregunta35: ['', Validators.required],
        pregunta36: ['', Validators.required],
        pregunta37: ['', Validators.required],
        pregunta38: ['', Validators.required],
        pregunta39: ['', Validators.required],
        pregunta40: ['', Validators.required],
        pregunta41: ['', Validators.required],
        pregunta42: ['', Validators.required],
        pregunta43: ['', Validators.required],
        pregunta44: ['', Validators.required],
        pregunta45: ['', Validators.required],
        pregunta46: ['', Validators.required],
        pregunta47: ['', Validators.required],
        pregunta48: ['', Validators.required],
        pregunta49: ['', Validators.required],
        pregunta50: ['', Validators.required],
        pregunta51: ['', Validators.required],
        pregunta52: ['', Validators.required],
        pregunta53: ['', Validators.required],
        pregunta54: ['', Validators.required],
        pregunta55: ['', Validators.required],
        pregunta56: ['', Validators.required],
        pregunta57: ['', Validators.required],
        pregunta58: ['', Validators.required],
        pregunta59: ['', Validators.required],
        pregunta60: ['', Validators.required],
        pregunta61: ['', Validators.required],
        pregunta62: ['', Validators.required],
        pregunta63: ['', Validators.required],
        pregunta64: ['', Validators.required],
        pregunta65: ['', Validators.required],
        pregunta66: ['', Validators.required],
        pregunta67: ['', Validators.required],
        pregunta68: ['', Validators.required],
        pregunta69: ['', Validators.required]
        
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
      e2_pregunta15:form.pregunta15,
      e2_pregunta16:form.pregunta16,
      e2_pregunta17:form.pregunta17,
      e2_pregunta18:form.pregunta18,
      e2_pregunta19:form.pregunta19,
      e2_pregunta20:form.pregunta20,
      e2_pregunta21:form.pregunta21,
      e2_pregunta22:form.pregunta22,
      e2_pregunta23:form.pregunta23,
      e2_pregunta24:form.pregunta24,
      e2_pregunta25:form.pregunta25,
      e2_pregunta26:form.pregunta26,
      e2_pregunta27:form.pregunta27,
      e2_pregunta28:form.pregunta28,
      e2_pregunta29:form.pregunta29,
      e2_pregunta30:form.pregunta30,
      e2_pregunta31:form.pregunta31,
      e2_pregunta32:form.pregunta32,
      e2_pregunta33:form.pregunta33,
      e2_pregunta34:form.pregunta34,
      e2_pregunta35:form.pregunta35,
      e2_pregunta36:form.pregunta36,
      e2_pregunta37:form.pregunta37,
      e2_pregunta38:form.pregunta38,
      e2_pregunta39:form.pregunta39,
      e2_pregunta40:form.pregunta40,
      e2_pregunta41:form.pregunta41,
      e2_pregunta42:form.pregunta42,
      e2_pregunta43:form.pregunta43,
      e2_pregunta44:form.pregunta44,
      e2_pregunta45:form.pregunta45,
      e2_pregunta46:form.pregunta46,
      e2_pregunta47:form.pregunta47,
      e2_pregunta48:form.pregunta48,
      e2_pregunta49:form.pregunta49,
      e2_pregunta50:form.pregunta50,
      e2_pregunta51:form.pregunta51,
      e2_pregunta52:form.pregunta52,
      e2_pregunta53:form.pregunta53,
      e2_pregunta54:form.pregunta54,
      e2_pregunta55:form.pregunta55,
      e2_pregunta56:form.pregunta56,
      e2_pregunta57:form.pregunta57,
      e2_pregunta58:form.pregunta58,
      e2_pregunta59:form.pregunta59,
      e2_pregunta60:form.pregunta60,
      e2_pregunta61:form.pregunta61,
      e2_pregunta62:form.pregunta62,
      e2_pregunta63:form.pregunta63,
      e2_pregunta64:form.pregunta64,
      e2_pregunta65:form.pregunta65,
      e2_pregunta66:form.pregunta66,
      e2_pregunta67:form.pregunta67,
      e2_pregunta68:form.pregunta68,
      e2_pregunta69:form.pregunta69,
     }
     
     localStorage.setItem('encuesta2', JSON.stringify(encuesta2));
     this.router.navigate(['/encuesta3'])
 }
 
 
 
  ngOnInit(): void {
     
    }

}
