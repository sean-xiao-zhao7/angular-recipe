import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-my-ingredients',
  templateUrl: './my-ingredients.component.html',
  styleUrls: ['./my-ingredients.component.css'],
})
export class MyIngredientsComponent implements OnInit {
  @Input() myIngredients: Ingredient[] = [];
  @Output() onRemoveIngredientEE = new EventEmitter<string>();

  ngOnInit(): void {}

  onRemoveIngredient(ingredientName: string) {
    this.onRemoveIngredientEE.emit(ingredientName);
  }
}
