import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrls: ['./xss.component.scss', '../app.component.scss']
})
export class XssComponent implements OnInit {

  text: string = '';
  evalText: string = '';
  form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      text: [''],
    });
  }

  ngOnInit(): void {
  }

  setText() {
    this.text = this.form.get('text').value; //set variable text to the form value
  }

  setEvalText() {
    let text = this.form.get('text').value; //set variable text to the form value
    if(text != null && text.length > 0) {
      this.evalText = eval(text);
    }
    else
      this.evalText = '';
  }
}
