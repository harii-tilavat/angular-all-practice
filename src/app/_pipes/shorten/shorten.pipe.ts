import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name:'shorten'
})
export class ShortenPipe implements PipeTransform {
  constructor() {}

  transform(value: any, ...args: any[]) {
    if(value.length>args[0]){
      return value.substr(0,args[0]) + '...' ;
    }
    else{
      return value;
    }
    // return value.substr(0,12) + value.length;
  }
}
