import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private allIngredients = [
    new Ingredient('Ingredient 1', '', ''),
    new Ingredient('Ingredient 2', '', ''),
    new Ingredient('Ingredient 3', '', ''),
  ];
  private allIngredientsBS = new BehaviorSubject<Ingredient[]>([]);
  allIngredientsObs = this.allIngredientsBS.asObservable();

  getAllIngredients() {
    return this.allIngredients.slice();
  }
}
