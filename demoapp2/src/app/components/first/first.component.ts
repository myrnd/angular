import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './first.component.html',
  /*template: '<p>Inline template</p>',*/
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  x: string = "first Variable";
  list: string[] = ["Apple", "Ball", "Cat"];

  constructor() { }

  ngOnInit(): void {
  }

}
