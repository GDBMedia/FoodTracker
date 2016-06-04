import { Component } from '@angular/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
      <h1 class="header">Food Tracker</h1>
      <food-list
        [foodList]="foods"
        (onFoodSelect)="foodWasSelected($event)">
      </food-list>
    </div>
  `
})

export class AppComponent {
  public foods: Food[];
     constructor(){
       this.foods = [
        new Food(0, "Ribs", "Slow cooked Pork ribs", 600, "2016-06-02T00:00:00", "2016-06-02T18:30:00")
      ];
     }
  foodWasSelected(clickedFood: Food): void {
  }
}
