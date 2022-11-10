import { Component, NgModule } from '@angular/core';
//import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { Encuesta2Component } from './encuesta2/encuesta2.component';
import { Encuesta3Component } from './encuesta3/encuesta3.component';
import { Encuesta4Component } from './encuesta4/encuesta4.component';
import { Encuesta5Component } from './encuesta5/encuesta5.component';
import { RuteadorComponent } from './index/ruteador/ruteador.component';




const routes: Routes =[
    { 
      path: 'admin',
      component: SiteLayoutComponent,
      children: [{path: '', component: HomeComponent, pathMatch: 'full'}] },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'encuesta1',          component: LandingComponent },
    {path:'encuesta2', component:Encuesta2Component},
    {path:'encuesta3', component:Encuesta3Component},
    {path:'encuesta4', component:Encuesta4Component},
    {path:'encuesta5', component:Encuesta5Component},
    {path:'login', component:RuteadorComponent, loadChildren: ()=> import('./index/index.module').then(o => o.IndexModule)},
    {path: '', redirectTo: 'login', pathMatch: 'full' },
    {path:'**',redirectTo:'login',pathMatch:'full'},
];

@NgModule({
  imports: [
   // CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true,
      enableTracing: true
    }
    )
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
