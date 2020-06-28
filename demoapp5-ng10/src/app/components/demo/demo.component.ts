import { Component, OnInit } from '@angular/core';
//import { API } from './../../../assets/config.api';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  //http;
  constructor(private http: HttpClient) { 
    /*
    fetch('https://restcountries.eu/rest/v2/all') //Promise
      .then(result => {
        return result.json();//Promise
      })
      .then(json => {
        console.log(json[0].name);
      })
    */

    this.http.get('https://restcountries.eu/rest/v2/all').subscribe(result => console.log(result));    

    /*
    try {
      this.http = new HttpClient();
      this.http.get('https://restcountries.eu/rest/v2/all')
        .subscribe(result => console.log(result));
    } catch(ex) {
      console.log('exc: '+ex.message);
    }
    */
  }

  ngOnInit(): void {
  }

}
