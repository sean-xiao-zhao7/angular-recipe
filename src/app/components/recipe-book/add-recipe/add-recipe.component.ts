import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Ingredient } from 'src/app/models/ingredient';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
})
export class AddRecipeComponent implements OnInit {
  @Input() myIngredients: Ingredient[] = [];
  @Output() addRecipeEmitter = new EventEmitter<Recipe>();
  name = new FormControl('');
  description = new FormControl('');
  imageUrl = new FormControl('');
  ingredients = new FormControl();

  constructor() {}

  ngOnInit(): void {}

  onAddRecipe() {
    const recipe = new Recipe(
      this.name.value,
      this.description.value,
      this.imageUrl.value
    );
    this.name.reset();
    this.description.reset();
    this.imageUrl.reset();
    this.addRecipeEmitter.emit(recipe);
  }
}
