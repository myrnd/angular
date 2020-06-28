import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demoapp5-ng10';

  //rxjs: Observable
  //Promises: Promise
  //setTimeout or setInterval

  //fetch:===> Promise
  //HttpClient:===> Observable

  counter = 0;
  p = null;
  o = null;
  constructor() {
    /*
    console.log('Line-19: Constructor called');
    setTimeout(() => {
      console.log('Line-22: Called Asyncronously');
    }, 0)//function, millisecond
    console.log('Line-25: Constructor Ends here');

    setInterval(() => {
      console.log('Line-26: setInterval called: '+ ++this.counter)
    }, 1000);
    */

    //Create Promise
    this.p = new Promise((resolve, reject) => {
      setTimeout(() => {
        //resolve('Resovled');
        reject('Rejected');
      }, 2000);
    });

    //Consume Promise
    this.p
      .then( result => console.log(result))
      .catch(ex => console.log('exception: '+ex));

    //To consume a promise we can use then() method
    //To consume observable we can use subscribe() method


    this.o = new Observable(observer => {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.next(4);
        observer.next(5);
        observer.complete();
    });

    this.o.subscribe(result => console.log(result));
  }
}