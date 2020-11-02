import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-lunch-form',
  templateUrl: './lunch-form.component.html',
  styleUrls: ['./lunch-form.component.css']
})
export class LunchFormComponent implements OnInit {

  private lunchForm: FormGroup = new FormGroup({
    location: new FormControl(''),
    meals: new FormArray([])
  });

  public get lunch(): FormGroup{
    return this.lunchForm;
  }
  public get meals(): FormArray{
    return this.lunchForm.get('meals') as FormArray;
  }

  constructor() { }

  ngOnInit(): void {
    this.meals.push(new FormControl(''));
  }

  public addMeal(): void {
    this.meals.push(new FormControl(''));
  }

  public lastItem(i: number): boolean {
    return this.meals.length === i + 1;
  }

  public removeMeal(i: number): void {
    this.meals.removeAt(i);
  }

  public onSubmit(value: any): void{
    console.log(value);
  }
}
