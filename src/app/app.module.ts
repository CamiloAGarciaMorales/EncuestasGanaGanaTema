import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { IndexModule } from './index/index.module';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AppHeaderComponent } from './_layout/app-header/app-header.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';
import { Encuesta2Component } from './encuesta2/encuesta2.component';
import { Encuesta3Component } from './encuesta3/encuesta3.component';
import { Encuesta4Component } from './encuesta4/encuesta4.component';
import { Encuesta5Component } from './encuesta5/encuesta5.component';





@NgModule({
  declarations: [
    AppLayoutComponent,
    SiteLayoutComponent,
    AppHeaderComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    Encuesta2Component,
    Encuesta3Component,
    Encuesta4Component,
    Encuesta5Component,
    
  ],
  imports: [
    
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    IndexModule,
    HomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
