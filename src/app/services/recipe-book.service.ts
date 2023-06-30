import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeBookService {
  private myRecipes: Recipe[] = [];

  getMyRecipes() {
    return this.myRecipes.slice();
  }

  addMyRecipe(recipe: Recipe) {
    this.myRecipes.push(recipe);
  }
}
