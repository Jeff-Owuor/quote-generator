import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any):any{
   let today:Date = new Date();
   let now:any =new Date(today.getHours(), today.getMinutes(), today.getSeconds());
   
  }
  
  }


