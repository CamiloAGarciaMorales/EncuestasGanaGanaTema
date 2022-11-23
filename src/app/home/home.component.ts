import { Component, OnInit } from '@angular/core';
import { EncuestaServiceService } from '../api/encuesta-service.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    allEncuestados: any = [];
    todo: any[]= [];

    constructor(private api: EncuestaServiceService) { }

    ngOnInit():void 
    {
        this.encuestados();
    }

    encuestados(): void {
        this.api
            .getEncuestas()
            .subscribe((response: any) => {
              this.allEncuestados = response;
              console.log(response);
              
            });
      }

    todos(){
        this.api
            .getTodo()
            .subscribe((response: any) => {
              this.todo = response;
              this.api.exportAsExcelFile(this.todo, 'Total_encuestas')

              
              
            },err=>{console.log(err.message);
            });
      }
}
