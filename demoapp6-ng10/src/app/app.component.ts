import { Demo2 } from './services/demo2.service';

import { DemoService } from './services/demo.service'; //module1
import { DemoService as DS } from './services/demo.service'; //module2
import { DemoService as DS2} from './services/demo.service'; //module3

import { Component, Injector } from '@angular/core';

//import { Employee } from './app.module';

export class Employee {
  public id: number;
  public name: string;
  constructor() {
    this.id = 1;
    this.name = "Anil";
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Employee]
})
export class AppComponent {
  employee: Employee;
  employee1: Employee;
  employee2: Employee;

  constructor(private injector: Injector) {
    // this.employee = new Employee();
    // this.employee1 = new Employee();
    // this.employee2 = new Employee();
    
    this.employee = this.injector.get(Employee);
    this.employee1 = this.injector.get(Employee);
    this.employee2 = this.injector.get(Employee);

    this.employee2.name = "Sohan";

    this.fun();

    const demo = this.injector.get(DemoService);
    const demo1 = this.injector.get(DemoService);
    
    // const demo = new DemoService();
    // const demo1 = new DemoService();
    
    demo1.items.push(50);

    console.log(demo.items);
    console.log(demo1.items);
  }

  fun() {
    console.log(this.employee);
    console.log(this.employee1);
    console.log(this.employee2);
  }
}