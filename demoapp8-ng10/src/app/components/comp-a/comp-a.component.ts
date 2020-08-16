import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {

  @Input() message: string;

  title: string = "CompA";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.title = this.message;

    this.dataService.message.subscribe(res => {
      console.log('Comp-A: '+res);
    });
  }

}
