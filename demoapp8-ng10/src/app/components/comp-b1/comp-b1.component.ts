import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-comp-b1',
  templateUrl: './comp-b1.component.html',
  styleUrls: ['./comp-b1.component.css']
})
export class CompB1Component implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.message.subscribe(res => {
      console.log('CompB1: '+res);
    });
  }

}
