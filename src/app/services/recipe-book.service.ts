import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeBookService {
  private myRecipes: Recipe[] = [];
  private myRecipesBS = new BehaviorSubject<Recipe[]>([]);
  myRecipesObs = this.myRecipesBS.asObservable();

  addMyRecipe(recipe: Recipe) {
    this.myRecipes.push(recipe);
    this.myRecipesBS.next(this.myRecipes);
  }
}
