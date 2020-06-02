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
    this.text = this.form.get('text').value;
  }

  printText(): string {
    if(this.text.length > 0) {
      return this.text;
    }
    else
      return null;
  }

  printEvalText() {
    if(this.text.length > 0) {
      let text = eval(this.text);
      this.text = '';
      return text;
    }
    else
      return null;
  }
}

export class InnerHtmlBindingComponent {
  // For example, a user/attacker-controlled value from a URL.

}
