import { ProudctService } from './../../services/proudct.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  providers: [ProudctService]
})
export class DemoComponent implements OnInit {
  user;
  constructor(
    private userService: UserService,
    private productService: ProudctService
  ) { 
    setTimeout(() => {
      this.userService.getUsers().subscribe(res => {
        this.user = res;
      });
    });

    const products = this.productService.getProducts();
    console.log(products);
  }

  ngOnInit(): void {
  }

}
