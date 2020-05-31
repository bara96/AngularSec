import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss', '../../app.component.scss']
})
export class AttributeDirectivesComponent implements OnInit {

  colors: string[] = ["yellow", "orange", "red", "purple", "blue"];
  form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      color: [''],
    });
  }

  ngOnInit(): void {
  }

}
