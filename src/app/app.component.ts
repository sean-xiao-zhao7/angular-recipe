import { Component } from '@angular/core';
import { Ingredient } from './models/ingredient';
import { Recipe } from './models/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My Recipes';
  section = 'shop';

  // user content
  myIngredients: Ingredient[] = [];
  myRecipes: Recipe[] = [];

  // available contents
  allIngredients = [
    new Ingredient('Ingredient 1', '', ''),
    new Ingredient('Ingredient 2', '', ''),
    new Ingredient('Ingredient 3', '', ''),
  ];

  onChangeSection(section: string) {
    this.section = section;
  }

  onSelectedIngredient(ingredientName: string) {
    this.myIngredients.push(new Ingredient(ingredientName, '', ''));
  }

  onAddMyIngredient(ingredient: Ingredient) {}

  onRemoveMyIngredient(ingredientName: string) {
    const target = this.myIngredients.findIndex(
      (ingredient) => ingredient.name === ingredientName
    );
    this.myIngredients.splice(target, 1);
  }

  onAddMyRecipe(recipe: Recipe) {}
}
