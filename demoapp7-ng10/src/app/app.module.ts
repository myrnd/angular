//import { ProudctService } from './services/proudct.service';
import { Module2Module } from './modules/module2/module2.module';
import { Module1Module } from './modules/module1/module1.module';
import { Module3Module } from './modules/module3/module3.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { AbcComponent } from './components/abc/abc.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    AbcComponent
  ],
  imports: [
    BrowserModule,
    Module3Module,
    Module1Module,
    Module2Module,
    HttpClientModule
  ],
  //providers: [ProudctService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
