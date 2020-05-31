import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicsComponent} from './basics/basics.component';
import {HomeComponent} from './home/home.component';
import {XssComponent} from './xss/xss.component';
import {CsrfComponent} from './csrf/csrf.component';
import {ComponentDirectivesComponent} from './directives/component-directives/component-directives.component';
import {StructuralDirectivesComponent} from './directives/structural-directives/structural-directives.component';
import {AttributeDirectivesComponent} from './directives/attribute-directives/attribute-directives.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'basics', component: BasicsComponent},
  { path: 'xss', component: XssComponent},
  { path: 'csrf', component: CsrfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
