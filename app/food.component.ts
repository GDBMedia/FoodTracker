import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { Food } from './food.model';

@Component({
    selector: 'food-display',
    inputs: ['food'],
  template: `
  <div class="form-group">
    <h3>{{food.name}}, {{food.deatils}} {{food.calories}}, {{food.date}}, {{food.time}}</h3>
  </div>
  `
})

export class FoodComponent implements AfterViewInit{
  public food: Food;
  ngAfterViewInit() {
  }
}
