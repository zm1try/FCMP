import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByWord'
})
export class FilterByWordPipe implements PipeTransform {

  transform(value: any, string: string): unknown {

    return string ? value.filter(item => this.filter(item.content, string)) : value.map(item => item);
  }

  filter(text, searchString) {
    const regexStr = '(?=.*' + searchString.split(/\,|\s/).join(')(?=.*') + ')';
    const searchRegEx = new RegExp(regexStr, 'gi');
    return text ? text.match(searchRegEx) !== null : false;
  }
}
