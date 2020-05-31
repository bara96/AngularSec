import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss', '../../app.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  names: string[] = ["Bob", "Marc", "Denis"];
  active: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeActive() {
    this.active = !this.active;
  }

}
