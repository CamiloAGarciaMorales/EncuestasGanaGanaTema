import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RuteadorComponent } from './ruteador/ruteador.component';



@NgModule({
  declarations: [
    LoginComponent,
    RuteadorComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class IndexModule { }
