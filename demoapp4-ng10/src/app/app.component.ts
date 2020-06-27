import { Component } from '@angular/core';

export interface skill {
  id: number;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demoapp4-ng10';

  skills = [
    {id: 1, name: 'JS'},
    {id: 2, name: 'ES6'},
    {id: 3, name: 'TS'},
    {id: 4, name: 'NG'}
  ];

  selected = this.skills[1];

  selectionChanged(s) {
    this.selected = s;
  }

  sel = this.skills[1].name;
}
