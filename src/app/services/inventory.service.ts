import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private myIngredients: Ingredient[] = [];

  selectedIngredient(ingredientName: string) {
    this.myIngredients.push(new Ingredient(ingredientName, '', ''));
  }

  removeMyIngredient(ingredientName: string) {
    const target = this.myIngredients.findIndex(
      (ingredient) => ingredient.name === ingredientName
    );
    this.myIngredients.splice(target, 1);
  }

  getMyIngredients() {
    return this.myIngredients.slice();
  }
}
