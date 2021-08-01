import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inform'
})
export class InformPipe implements PipeTransform {

  transform(value: Array<any>, field: any): Array<any> {
    if(!field){
      return value;
    }
    if(!value){
      return [];
    }
    return value.filter(mas => 
        new RegExp(field ,'gi').test(mas.name) || 
        new RegExp(field ,'gi').test(mas.second_name) || 
        new RegExp(field ,'gi').test(mas.number));
  }

}
