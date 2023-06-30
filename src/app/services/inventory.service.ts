import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private myIngredients: Ingredient[] = [];
  private myIngredientsBS = new BehaviorSubject<Ingredient[]>([]);
  myIngredientsObs = this.myIngredientsBS.asObservable();

  selectedIngredient(ingredientName: string) {
    this.myIngredients.push(new Ingredient(ingredientName, '', ''));
    this.myIngredientsBS.next(this.myIngredients);
  }

  removeMyIngredient(ingredientName: string) {
    const target = this.myIngredients.findIndex(
      (ingredient) => ingredient.name === ingredientName
    );
    this.myIngredients.splice(target, 1);
    this.myIngredientsBS.next(this.myIngredients);
  }

  getMyIngredients() {
    return this.myIngredients.slice();
  }
}
