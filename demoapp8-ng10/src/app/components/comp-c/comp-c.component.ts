import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css']
})
export class CompCComponent implements OnInit {

  @Output() msgFromChild = new EventEmitter<string>();

  counter: number = 0;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.msgFromChild.emit('Hello from comp-c');
  }

  clickHandler() {
    this.counter = this.counter + 1;
    this.msgFromChild.emit('Hell from comp-c Counter: '+this.counter);


    this.dataService.updateMessage('msg counter: '+this.counter);
  }

}
