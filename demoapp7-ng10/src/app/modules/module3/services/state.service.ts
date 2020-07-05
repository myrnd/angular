import { Module3Module } from './../module3.module';
import { Injectable } from '@angular/core';

@Injectable({
  //providedIn: 'root'
  providedIn: Module3Module
})
export class StateService {

  constructor() { 
    console.log('StateService constructor called');
  }
}
