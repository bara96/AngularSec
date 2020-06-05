import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicsComponent } from './basics/basics.component';
import { HomeComponent } from './home/home.component';
import { XssComponent } from './xss/xss.component';
import { CsrfComponent } from './csrf/csrf.component';
import { ComponentDirectivesComponent } from './directives/component-directives/component-directives.component';
import { StructuralDirectivesComponent } from './directives/structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './directives/attribute-directives/attribute-directives.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HighlightDirective } from './directives/attribute-directives/highlight.directive';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import { CspComponent } from './csp/csp.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    HomeComponent,
    XssComponent,
    CsrfComponent,
    ComponentDirectivesComponent,
    StructuralDirectivesComponent,
    AttributeDirectivesComponent,
    HighlightDirective,
    CspComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    //CSRF-XSRF Protection
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
