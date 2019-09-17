import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToIterable'
})
export class NumberToIterablePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const maxOfTwo = value === Infinity ? 2 : Math.min(2, value);
    const arr = new Array(maxOfTwo).fill(value).map((x, i) => i);
    return arr;
  }

}
