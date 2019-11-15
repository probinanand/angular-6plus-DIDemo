import { Component,Input,Host,Optional } from '@angular/core';

@Component({
  selector: 'chtwo-app',
  template: 
  `<h2>Added input for Input Output</h2>
  <ul>
  <li *ngFor="let str of hh">
  {{str}}
  </li>
  </ul>
  `
  //providers:[DateCacheService]
})
export class ChTwoComponent  {
  @Input() hh:string[]
  name = 'Child Two Angular';
  constructor(){

  }
  //get hh() {return this.dcs.inputs;}
}