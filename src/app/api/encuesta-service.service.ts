import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class EncuestaServiceService {
  arrayFormularios = []

  url: string = "http://localhost:3000/api/encuestas/formulario/"
  urlLogin: string = "http://localhost:3000/api/encuestas/aut/login"
  urlSignup: string = "http://localhost:3000/api/encuestas/aut/signup"
  urlEncuestaGet: string = "http://localhost:3000/api/encuestas/formulario/encuestaGet"
  urlEncuestaTodo: string = "http://localhost:3000/api/encuestas/formulario/encuestaTodo"


  constructor(private http: HttpClient) { }



  public exportAsExcelFile(json: any[], excelFileName: string) {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + EXCEL_EXTENSION);
  }

  postEncuesta1(form) {
    return this.http.post(this.url, form)
  }
  postlogin(form) {
    return this.http.post(this.urlLogin, form)
  }
  postSignup(form) {
    return this.http.post(this.urlSignup, form)
  }
  getEncuestas() {
    return this.http.get(this.urlEncuestaGet)
  }
  getTodo() {
    return this.http.get(this.urlEncuestaTodo)
  }

}
