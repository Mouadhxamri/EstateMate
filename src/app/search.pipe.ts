import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(list: any[], value: any[], key: any[]): any {
    value.forEach((name: string, index) => {
      if (name) {
        list = list.filter((p) => {
          return (p[key[index]]
            .toString()
            .toLowerCase()
            .indexOf(name.toString().toLowerCase()) !== -1);
        });
      }
    });
    return list;
  }
}
