import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Meta} from '@angular/platform-browser';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-csp',
  templateUrl: './csp.component.html',
  styleUrls: ['./csp.component.scss',  '../app.component.scss']
})
export class CspComponent implements OnInit {

  script: any;
  form: FormGroup;

  constructor(formBuilder: FormBuilder,
              private meta: Meta,
              private renderer2: Renderer2,
              @Inject(DOCUMENT) private _document) {
    this.form = formBuilder.group({
      text: [''],
    });
  }

  ngOnInit(): void {
  }

  parseScript() {
    this.script = this.renderer2.createElement('script');
    this.script.text = this.form.get('text').value;
    this.renderer2.appendChild(this._document.body, this.script);
  }

  addExternalScript() {
    this.script = this.renderer2.createElement('script');
    this.script.src = 'http://localhost:3000/script/wildcard';
    this.script.text = this.form.get('text').value;
    this.renderer2.appendChild(this._document.body, this.script);
  }

  addCSP(value: number = 0) {
    let cspTags = [
      { name: "csp",  'http-equiv':"Content-Security-Policy",  content: "default-src 'none'; script-src 'self';style-src 'self';font-src 'self';img-src 'self' data:;connect-src 'self'" },
      { name: "csp_unsafe_inline",  'http-equiv':"Content-Security-Policy",  content: "default-src 'none'; script-src 'self' 'unsafe-inline';style-src 'self';font-src 'self';img-src 'self' data:;connect-src 'self';" },
      { name: "csp_unsafe_eval",  'http-equiv':"Content-Security-Policy",  content: "default-src 'none'; script-src 'self' *;style-src 'self';font-src 'self';img-src 'self' data:;connect-src 'self';" }
      ]

    if(value >= 0 && value < cspTags.length) {
      this.meta.addTag(cspTags[value]);
    }
  }
}
