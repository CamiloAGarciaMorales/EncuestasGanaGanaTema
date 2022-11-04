import { Component, OnInit } from '@angular/core';
import { encuesta1, encuesta2 } from '../modelos/modelosinterface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EncuestaServiceService } from '../api/encuesta-service.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { TouchSequence } from 'selenium-webdriver';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})



export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  fecha:Date;
  formCompleto : FormGroup
  constructor(public formularioCompleto: FormBuilder, private api:EncuestaServiceService,private router : Router ) { 
    
    this.formCompleto = this.formularioCompleto.group(
      {

        //Datos Solicitud
        cedula:['', Validators.required],
        fecha_aplicacion:['', Validators.required],
        nombre_encuestado:['', Validators.required],
        sexo:['', Validators.required],
        anio_nacimiento:['', Validators.required],
        estado_civil:['', Validators.required],
        ult_niv_estudio:['', Validators.required],
        ocupacion_profesion:['', Validators.required],
        ciudad_residencia:['', Validators.required],
        departamento_residencia:['', Validators.required],
        estrato_servicios:['', Validators.required],
        tipo_vivienda:['', Validators.required],
        numero_personas_dependientes_econo:['', Validators.required],
        ciudad_trabajo:['', Validators.required],
        departamento_trabajo:['', Validators.required],
        anios_lleva_mas_menos_en_empresa:['', Validators.required],
        tiempo_en_empresa:['', Validators.required],
        nombre_cargo:['', Validators.required],
        cargo_mas_parecido:['', Validators.required],
        anios_mas_menos_en_cargo:['', Validators.required],
        anios_en_cargo_empresa:['', Validators.required],
        departamento_area_seccion_empresa:['', Validators.required],
        tipo_contrato:['', Validators.required],
        horas_trabajo_al_dia:['', Validators.required],
        tipo_salario_recibo:['', Validators.required]

        
})
  }

  habTiempoTrabajo:any
  habTiempoCargo:any

  
  
  habilitarTimeTrabajo(subTrabajo) {
    console.log(subTrabajo);
    
    if (subTrabajo == "2") {
      this.habTiempoTrabajo = true;
    }

  }
  postForm(form) {

    console.log("asd")
    let encuesta1: encuesta1 = {
      cedula: form.cedula,
      fecha_aplicacion: form.fecha_aplicacion,
      nombre_encuestado: form.nombre_encuestado,
      sexo: form.sexo,
      anio_nacimiento:form.anio_nacimiento,
      estado_civil:form.estado_civil,
      ult_niv_estudio:form.estado_civil,
      ocupacion_profesion:form.ocupacion_profesion,
      ciudad_residencia:form.ciudad_residencia,
      departamento_residencia:form.departamento_residencia,
      estrato_servicios:form.estrato_servicios,
      tipo_vivienda:form.tipo_vivienda,
      numero_personas_dependientes_econo:form.numero_personas_dependientes_econo,
      ciudad_trabajo:form.ciudad_trabajo,
      departamento_trabajo:form.departamento_trabajo,
      anios_lleva_mas_menos_en_empresa:form.anios_lleva_mas_menos_en_empresa,
      tiempo_en_empresa:form.tiempo_en_empresa,
      nombre_cargo:form.nombre_cargo,
      cargo_mas_parecido:form.cargo_mas_parecido,
      anios_mas_menos_en_cargo:form.anios_mas_menos_en_cargo,
      anios_en_cargo_empresa:form.anios_en_cargo_empresa,
      departamento_area_seccion_empresa:form.departamento_area_seccion_empresa,
      tipo_contrato:form.tipo_contrato,
      horas_trabajo_al_dia:form.horas_trabajo_al_dia,
      tipo_salario_recibo:form.tipo_salario_recibo,
    }
    
    
    
    localStorage.clear()
    localStorage.setItem('encuesta1', JSON.stringify(form));

    //ocalStorage.setItem("encuesta1", form)
    this.router.navigate(['/encuesta2'])


}

  
  
  habilitarTimeCargo(subCargo) {
    if (subCargo == "2") {
      this.habTiempoCargo = true;
    }

  }

  ngOnInit() {}

}
