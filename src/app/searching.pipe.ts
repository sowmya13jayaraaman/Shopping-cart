import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searching'
})
export class SearchingPipe implements PipeTransform {

  transform(values: any, searchText:string): any {

    if (!values) return [];
    if (!searchText) return values;

    return values.filter(n => n.name.toLowerCase().indexOf(searchText) > -1 );


    
  }

}
