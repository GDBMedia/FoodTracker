import { Component, EventEmitter } from '@angular/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';
import { EditFoodDetailsComponent } from './edit-food-details.component';
import { NewFoodComponent } from './new-food.component';
import {CaloriePipe} from './calorie.pipe';
import {DatePipe} from './date.pipe';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  pipes: [CaloriePipe, DatePipe],
  directives: [FoodComponent, EditFoodDetailsComponent, NewFoodComponent],
  templateUrl: 'app/food-list.component.html'
})

export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  public filterCalorie: string = "all";
  public filterDate: string = "all";
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
  createFood(newFood: Food): void {
    newFood.id = this.foodList.length;
    this.foodList.push(newFood);
  }
  onChangeCalorie(filterOption) {
    this.filterCalorie = filterOption;
  }
  onChangeDate(filterOption) {
    if(filterOption === ""){
      this.filterDate = "all";
    }else{
      this.filterDate = moment(filterOption).format("MMMM Do YYYY");
    }

  }
  getDateFilter(){
    return this.filterDate;
  }
    getTotalCalories(): number {
    var totalCalories: number = 0;
    this.foodList.forEach(function(food){
      totalCalories += food.calories;
    });
    return totalCalories;
  }
    getTodaysCalories(date:string): number {
    var totalCalories: number = 0;
    this.foodList.forEach(function(food){
      if(food.date === date){
        totalCalories += food.calories;
      }
    });
    return totalCalories;
  }
}
