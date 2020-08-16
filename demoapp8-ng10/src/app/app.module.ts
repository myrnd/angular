import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompAComponent } from './components/comp-a/comp-a.component';
import { CompCComponent } from './components/comp-c/comp-c.component';
import { CompBComponent } from './components/comp-b/comp-b.component';
import { CompB1Component } from './components/comp-b1/comp-b1.component';

@NgModule({
  declarations: [
    AppComponent,
    CompAComponent,
    CompCComponent,
    CompBComponent,
    CompB1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
