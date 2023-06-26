import { Component } from '@angular/core';
import { Ingredient } from './models/ingredient';
import { Recipe } from './models/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Recipe';
  section = 'shop';

  // user content
  myIngredients = [];
  myRecipes = [];

  // available contents
  allIngredients = [];
  allRecipes = [];

  onSelectSection(section: string) {
    this.section = section;
  }

  onSelectedIngredient(ingredientName: string) {}

  onAddMyIngredient(ingredient: Ingredient) {}

  onRemoveMyIngredient(ingredientName: string) {}

  onAddMyRecipe(recipe: Recipe) {}
}
