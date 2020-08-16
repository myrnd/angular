import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public message = new BehaviorSubject<string>('Default Message');
  constructor() { }

  updateMessage(msg) {
    console.log('msg: '+msg);

    this.message.next(msg);
  }

}
