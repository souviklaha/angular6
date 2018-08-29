import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseMessage'
})
export class ReverseMessagePipe implements PipeTransform {

  msg:string;
  transform(value: any, args?: any): any {
    if (!value || value.length == 0) {
      return "";
    }

    this.msg = ' ';
    if(value.length == 1) {
      this.msg = value;
    } else {
      //console.log("value.length---: "+value.length);
      for(var i=value.length; i>0; i--){
        this.msg = this.msg+value[i-1];      
      }
    }
    return this.msg;
  }

}
