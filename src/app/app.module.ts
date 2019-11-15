import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentComponent } from './parent.component';
import { ChildOneComponent } from './childone.component';
import { ChildTwoComponent } from './childtwo.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,ParentComponent,ChildOneComponent,ChildTwoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
