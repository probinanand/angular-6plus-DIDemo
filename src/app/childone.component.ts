import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'childone-app',
  template: `
  <input #newHero
      (keyup.enter)="addHero(newHero.value)"
      (blur)="addHero(newHero.value); newHero.value='' ">
     <br/><br/>
    <button (click)="addHero(newHero.value)">Add</button>

   `,
  
})
export class ChildOneComponent  {
  name = 'Child One Angular';
 
  @Output() enterHero = new EventEmitter<string>();
  addHero(newHero: string) {
    if (newHero) {
     
      this.enterHero.emit(newHero);
    }
  }
}