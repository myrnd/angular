import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoapp8-ng10';

  messageReceived(event) {
    console.log('msg received: '+event);
  }

}

