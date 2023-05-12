import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    console.log(value);

    if(value.length!=0){
      return value.charAt(0).toUpperCase() +value.slice(1).toLowerCase();
    }
    return '';
  }
}
