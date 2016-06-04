import {Component, EventEmitter} from '@angular/core';
import {Food} from './food.model';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import { DATEPICKER_DIRECTIVES, TimepickerComponent } from 'ng2-bootstrap/ng2-bootstrap';

import * as moment from 'moment';


@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  directives: [DATEPICKER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES, TimepickerComponent],
  template: `
    <div class="food-form">
      <h3>Create Food:</h3>
      <div class="form-group">
        <input placeholder="Food Name" class="input-lg" #newName>
      </div>
      <div class="form-group">
        <input placeholder="Details" class="input-lg" #newDetails>
      </div>
      <div class="form-group">
        <input placeholder="Calories" class="input-lg" #newCalories>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <input placeholder="Date" class="input-lg" [(value)] = "dt" #newDate >
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <input placeholder="Time" class="input-lg" [(value)] = "mytime" #newTime >
        </div>
      </div>
      <div>
        <div class="col-xs-6">
            <datepicker [(ngModel)]="dt" [minDate]="minDate" [showWeeks]="true"></datepicker>
          </div>
          <div class="col-xs-6">
            <timepicker [(ngModel)]="mytime" (change)="changed()" [showMeridian]="ismeridian"></timepicker>
          </div>
      </div>
      <button (click)="addFood(newName, newDetails, newCalories, newDate, newTime)" class="btn btn-success btn-lg add-button">Add</button>
    </div>
  `
})
export class NewFoodComponent{
  public  dt:string = "";
  public  mytime:string = "";
  public onSubmitNewFood: EventEmitter<Food>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement, userDate: HTMLInputElement, userTime: HTMLInputElement){
    var myNewFood = new Food(0, userName.value, userDetails.value, parseFloat(userCalories.value), userDate.value, userTime.value);
   this.onSubmitNewFood.emit(myNewFood);

 }
}
