import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolFormat',
})
export class BoolFormatPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return value ? 'yes' : 'No';
  }
}
