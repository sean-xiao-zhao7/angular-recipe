import { EventEmitter, Injectable, Output } from '@angular/core';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private myIngredients: Ingredient[] = [];
  @Output() newIngredientAddedEmitter = new EventEmitter<Boolean>();

  selectedIngredient(ingredientName: string) {
    this.myIngredients.push(new Ingredient(ingredientName, '', ''));
    this.newIngredientAddedEmitter.emit(true);
  }

  removeMyIngredient(ingredientName: string) {
    const target = this.myIngredients.findIndex(
      (ingredient) => ingredient.name === ingredientName
    );
    this.myIngredients.splice(target, 1);
    this.newIngredientAddedEmitter.emit(true);
  }

  getMyIngredients() {
    return this.myIngredients.slice();
  }
}
