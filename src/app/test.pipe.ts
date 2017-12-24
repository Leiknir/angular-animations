import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: any, arg1?: any, arg2?: any): any {
    console.log("val:", value);
    console.log("arg1:", arg1);
    console.log("arg2:", arg2);

    return null;
  }

}
