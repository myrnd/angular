import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface User {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users;
  constructor() {
    this.users = [
      {id: 1, name: "Anil"}, 
      {id: 2, name: "Rohan"},
      {id: 3, name: "Sohan"},
      {id: 4, name: "Mohan"}
    ];
  }

  getUsers(): Observable<User> {
    return new Observable(observer => {
      let index = 0;
      setInterval(() => {
        if (index<4) {
          observer.next(this.users[index++]);
        }
        else {
          observer.complete();
          this.users[3].name = "MyR&D";
        }
      }, 2000);
    });
  }

}
