import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbcComponent } from './components/abc/abc.component';
import { DefComponent } from './components/def/def.component';



@NgModule({
  declarations: [AbcComponent, DefComponent],
  imports: [
    CommonModule
  ]
})
export class Module3Module { }
