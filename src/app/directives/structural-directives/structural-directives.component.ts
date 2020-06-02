import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss', '../../app.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  names: string[] = ["Bob", "Marc", "Denis"];
  active: boolean = false;
  form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: [''],
    });
  }

  ngOnInit(): void {
  }

  addName() {
    let name = this.form.get('name').value; //take the form value
    if(name != null)
      this.names.push(name);  //add name to array
  }

  changeActive() {
    this.active = !this.active;   //change active value
  }

}
