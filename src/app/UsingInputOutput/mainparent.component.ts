import { Component,OnInit } from '@angular/core';
import {DateCacheService} from '../datacache.service';
@Component({
  selector: 'mainparent-app',
  template: 
  `<div> 
  <chone-app (enterHero) ="getMessage($event)" ></chone-app> 
   <chtwo-app [hh]="hero"></chtwo-app>
  </div>`,
  providers:[DateCacheService]
})
export class MainParentComponent implements OnInit  {
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