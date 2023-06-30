import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { Recipe } from 'src/app/models/recipe';
import { RecipeBookService } from 'src/app/services/recipe-book.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [RecipeBookService],
})
export class RecipeListComponent implements OnInit {
  myRecipes: Recipe[] = [];
  @Input() myIngredients: Ingredient[] = [];
  addNew: boolean = false;

  constructor(private recipeBookService: RecipeBookService) {}

  ngOnInit(): void {
    this.myRecipes = this.recipeBookService.getMyRecipes();
  }

  onAddNew() {
    this.addNew = true;
    this.myRecipes = this.recipeBookService.getMyRecipes();
  }

  onAddRecipe(recipe: Recipe) {
    this.recipeBookService.addMyRecipe(recipe);
    this.myRecipes = this.recipeBookService.getMyRecipes();
    this.addNew = false;
  }
}
