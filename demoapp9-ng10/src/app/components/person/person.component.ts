import { Component, OnInit } from '@angular/core';
import { Person, PersonModel } from './../../model/person.model';
import { DataService } from './../../services/data.service';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  public person: PersonModel;

  constructor(private dataService: DataService) { 
    this.person = new Person();
  }

  ngOnInit(): void {
  }

  save() {
    console.log(this.person);
    this.dataService.updatePerson(this.person);
  }
}
