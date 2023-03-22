import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseWord'
})
export class ReverseWordPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length === 0) return '';

    let reversedWord: string = '';

    for (let i = value.length - 1; i >= 0; i--) {
      reversedWord += value.charAt(i)
    }

    return reversedWord;
  }

}
