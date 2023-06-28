import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Input() myRecipes: Recipe[] = [];
  @Input() myIngredients: Ingredient[] = [];
  @Output() newRecipeEmitter = new EventEmitter<Recipe>();
  addNew: boolean = false;

  ngOnInit(): void {
    console.log(this.myIngredients);
  }

  onAddNew() {
    this.addNew = true;
  }

  onAddRecipe(recipe: Recipe) {
    this.newRecipeEmitter.emit(recipe);
    this.addNew = false;
  }
}
