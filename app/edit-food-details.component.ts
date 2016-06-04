import {Component} from '@angular/core';
import {Food} from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
    <h3>Edit Description: </h3>
    <div class="form-group">
      <input [(ngModel)]="food.name" class="col-sm-8 input-lg food-form"/>
    </div>
    <div class="form-group">
      <input [(ngModel)]="food.details" class="col-sm-8 input-lg food-form"/>
    </div>
    <div class="form-group">
      <input [(ngModel)]="food.calories" class="col-sm-8 input-lg food-form"/>
    </div>
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
}
