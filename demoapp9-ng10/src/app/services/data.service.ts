import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Person, PersonModel } from './../model/person.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  person;// = new BehaviorSubject<Person>(new Person());
  constructor() { 
    const p:Person = new Person();
    p.name = "Anil";
    p.location = "BLR";
    this.person = new Subject<Person>();
    //this.person = new BehaviorSubject<Person>(p);
  }

  public updatePerson(person) {
    this.person.next(person);
  }
}
