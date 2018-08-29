import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piglatin'
})
export class PiglatinPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value|| value.length==0 || value.length==1) return ''
    return value.split(" ").map((v)=>{return v.substring(1) + v.substring(0,1)+"a";}).join(' ');
  }   
}
