import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginFormRxComponent } from './login-form-rx/login-form-rx.component';

import { ComentarDirective } from './directives/comentar.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Login2Component,
    LoginFormComponent,
    LoginFormRxComponent,
    ComentarDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
