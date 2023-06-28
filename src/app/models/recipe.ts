import { Ingredient } from './ingredient';

export class Recipe {
  public name: string;
  public longDescription: string;
  public imageUrl: string;
  public ingredients: Ingredient[] = [];

  constructor(name: string, longDescription: string, imageUrl: string) {
    this.name = name;
    this.longDescription = longDescription;
    this.imageUrl = imageUrl;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
