import { Ingredient } from './ingredient';

export class Recipe {
  public name: string;
  public longDescription: string;
  public imageUrl: string;
  public ingredients: Ingredient[] = [];

  constructor(
    name: string,
    longDescription: string,
    imageUrl: string,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.longDescription = longDescription;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
  }
}
