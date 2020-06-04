import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-csrf',
  templateUrl: './csrf.component.html',
  styleUrls: ['./csrf.component.scss', '../app.component.scss']
})
export class CsrfComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  home() {
    return this.http.get("/api").subscribe( response => {
      console.log("home", response);
    });
  }

  login() {
    this.http.post("/api/login", {}).subscribe( response => {
      console.log("login", response);
    });
  }

  users() {
    this.http.get("/api/users").subscribe( response => {
      console.log("stats", response);
    });
  }

}
