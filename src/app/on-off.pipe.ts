import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onOff'
})
export class OnOffPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): unknown {
    return value ? "On" : "Off";
  }

}
