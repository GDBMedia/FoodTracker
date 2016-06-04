import {Pipe, PipeTransform} from '@angular/core';
import {Food} from './food.model';

@Pipe({
  name: "calorie",
  pure: false
})
export class CaloriePipe implements PipeTransform {

  transform(input: Food[], args) {
    console.log(args);
    var desiredCalorieState = args;
    if(desiredCalorieState === "healthy") {
      return input.filter((food) => {
        return food.calories < 500;
      });
    } else if (desiredCalorieState === "notHealthy") {
      return input.filter((food) => {
        return food.calories > 500;
      });
    } else {
      return input;
    }

  }
}
