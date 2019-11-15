import { Component,Input,Host,Optional } from '@angular/core';
import {DateCacheService} from './datacache.service';
@Component({
  selector: 'childtwo-app',
  template: 
  `<h2>Added input</h2>
  <ul>
  <li *ngFor="let str of hh">
  {{str}}
  </li>
  </ul>
  `
  //providers:[DateCacheService]
})
export class ChildTwoComponent  {
  //@Input() hh:string[]
  name = 'Child Two Angular';
  constructor(
    @Host()
    private dcs : DateCacheService){

  }
  get hh() {return this.dcs.inputs;}
}