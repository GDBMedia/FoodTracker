import {Pipe, PipeTransform} from '@angular/core';
import {Food} from './food.model';

@Pipe({
  name: "date",
  pure: false
})
export class DatePipe implements PipeTransform {
  transform(input: Food[], args) {
    console.log(args);
    var desiredDateState = args;
    if(desiredDateState === "all") {
      return input;
    } else{
      return input.filter((food) => {
        return food.date === desiredDateState;
      });
    }

  }
}
