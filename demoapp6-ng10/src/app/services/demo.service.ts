import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  public items = [10, 20, 30, 40];
  constructor() { }
}
