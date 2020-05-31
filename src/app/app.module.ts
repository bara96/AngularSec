import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicsComponent } from './basics/basics.component';
import { HomeComponent } from './home/home.component';
import { XssComponent } from './xss/xss.component';
import { CsrfComponent } from './csrf/csrf.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    HomeComponent,
    XssComponent,
    CsrfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
