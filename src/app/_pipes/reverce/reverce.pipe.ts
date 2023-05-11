import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverce'
})
export class RevercePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): any {
    let reverceStr:string='';
    // console.log(value.)
    for(let char of value){
      reverceStr=char+reverceStr;
    }
    return reverceStr;
  }

}
