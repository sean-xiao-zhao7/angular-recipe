import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Input() myRecipes: Recipe[] = [];
  @Output() newRecipeEmitter = new EventEmitter<Recipe>();
  addNew: boolean = false;

  ngOnInit(): void {}

  onAddNew() {
    this.addNew = true;
  }

  onAddRecipe(recipe: Recipe) {
    this.newRecipeEmitter.emit(recipe);
    this.addNew = false;
  }
}
