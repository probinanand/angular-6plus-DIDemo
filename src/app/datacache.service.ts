import { Injectable }  from '@angular/core';

@Injectable()
export class DateCacheService {
  public inputs: string[] =[]
  constructor(){
    
  }
  addinputs(str:string){
    this.inputs.push(str);
    return this.inputs;
  }

}