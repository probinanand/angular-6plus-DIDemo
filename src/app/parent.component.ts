import { Component,OnInit } from '@angular/core';
import {DateCacheService} from './datacache.service';
@Component({
  selector: 'parent-app',
  template: 
  `<div> 
  <childone-app (enterHero) ="getMessage($event)" ></childone-app> 
  <ng-content></ng-content>
  </div>`,
  providers:[DateCacheService]
})
export class ParentComponent implements OnInit  {
  name = 'Parent Angular';
  eh:string="";
  constructor(private dc:DateCacheService){

   }
   getMessage(msg:string)
   {
     this.eh = msg;
     //if(this.eh){
     //console.log(this.eh);
     this.dc.addinputs(this.eh);
     //}
     console.log(this.hero);
   }
   ngOnInit(){
     
   }
   get hero() { return this.dc.inputs; }
}