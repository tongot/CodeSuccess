import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText'
})
export class ShortenTextPipe implements PipeTransform {

  // tslint:disable-next-line: typedef
  transform(value: string): string {
    if (value.length > 40) {
    return value.substr(0, 40) +  '...';
    }
    return value;
  }

}
