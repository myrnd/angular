import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonComponent } from './components/person/person.component';
import { PersonsComponent } from './components/persons/persons.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //for ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
