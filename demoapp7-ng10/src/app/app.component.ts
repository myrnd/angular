//import { StateService } from './modules/module3/services/state.service';
import { ProudctService } from './services/proudct.service';
import { DataService } from './modules/module1/data.service';
import { DataService as M2DataService } from './modules/module2/data.service';

import { UserService } from './services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProudctService]
})
export class AppComponent {
  users;
  constructor(
    private userService: UserService, 
    private dataService: DataService,
    private productService: ProudctService
    ) {

    //this.users = this.userService.getUsers();
    //console.log(this.dataService.data);

    const products = this.productService.getProducts();
    console.log(products);
  }
}
