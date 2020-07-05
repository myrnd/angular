//import { Module3Module } from './../modules/module3/module3.module';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//{
  //providedIn: 'root' //Here inplace of root, we can specify any other module
  //providedIn: Module3Module
//}

@Injectable({
  providedIn: 'root'
})
export class ProudctService {

  private products = [
    {id: 1, name: "Detol", price: 20},
    {id: 2, name: "Lux", price: 12}
  ];

  constructor(private http: HttpClient) { 
    console.log('ProductService constructor called');
  }

  getProducts() {
    return this.products;
  }
}
