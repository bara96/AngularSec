import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrls: ['./xss.component.scss', '../app.component.scss']
})
export class XssComponent implements OnInit {

  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';

  text: string = '';
  form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      text: [''],
    });
  }

  ngOnInit(): void {
  }

  changeText() {
    this.text = this.form.get('text').value; //set variable text to the form value
  }

  printText(): string {   //print the user text
    if(this.text.length > 0) {
      return this.text;
    }
    else
      return null;
  }

  printEvalText() {   //print user text with eval()
    if(this.text.length > 0) {
      let text = eval(this.text);
      this.text = '';
      return text;
    }
    else
      return null;
  }
}
