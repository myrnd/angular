import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "Interpolation";

  html = "<b>This <i>is</i> html content<b>";

  isChecked = true;

  getTitle() {
    return this.title;
  }
}