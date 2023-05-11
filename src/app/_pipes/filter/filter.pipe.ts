import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(servers:any, filterStatus:string, propName:string): any {
    if(filterStatus.length!=0){
      let newArray=[];
      for(let item of servers){
        if(item[propName]===filterStatus){
          newArray.push(item);
        }
      }
      return newArray;
    }
    else{
      return servers;
    }
  }
}
