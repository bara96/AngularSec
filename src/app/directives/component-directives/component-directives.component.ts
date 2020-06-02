import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-component-directives',
  templateUrl: './component-directives.component.html',
  styleUrls: ['./component-directives.component.scss','../../app.component.scss']
})
export class ComponentDirectivesComponent implements OnInit {

  form: FormGroup;
  title: string = "Angular Security"  //the title printed

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      firstName: [''],
    });
  }

  ngOnInit(): void {
  }

  printHelloText() {    //the user firstname printed
    let name =  this.form.get('firstName').value; //take the form value
    return "Hello " + name + "!";
  }

}
