import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {

  @Input() x: string;

  constructor() { }

  ngOnInit(): void {
    console.log("x: "+this.x);
  }

}
