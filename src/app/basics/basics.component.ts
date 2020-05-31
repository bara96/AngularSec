import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss', '../app.component.scss']
})
export class BasicsComponent implements OnInit {

  selected: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
