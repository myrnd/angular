import { Component, OnInit } from '@angular/core';
import { Person, PersonModel } from './../../model/person.model';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  persons: Person[] = [];
  constructor(private dataService: DataService) { 

  }

  ngOnInit(): void {
    this.dataService.person.subscribe(data => {
      console.log(data);
      //this.persons.push(Object.assign({}, data));
      this.persons.push({...data});

    });
  }

}
