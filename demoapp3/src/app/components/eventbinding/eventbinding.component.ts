import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  counter = 0;
  constructor() { }

  ngOnInit(): void {
  }
  data = "text";
  clickHandler() {
    this.counter = this.counter + 2;
  }

  keyHandler(event) {
    //alert(event.target.value);
    this.data = event.target.value;
  }
}
