import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { Recipe } from 'src/app/models/recipe';
import { InventoryService } from 'src/app/services/inventory.service';
import { RecipeBookService } from 'src/app/services/recipe-book.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  myRecipes: Recipe[] = [];
  myIngredients: Ingredient[] = [];
  addNew: boolean = false;
  myRecipesObsSub: any;
  myIngredientsObsSub: any;

  constructor(
    private recipeBookService: RecipeBookService,
    private inventoryService: InventoryService
  ) {}

  ngOnInit(): void {
    this.myRecipesObsSub = this.recipeBookService.myRecipesObs.subscribe(
      (recipes) => {
        this.myRecipes = recipes;
      }
    );
    this.myIngredientsObsSub = this.inventoryService.myIngredientsObs.subscribe(
      (ingredients) => {
        this.myIngredients = ingredients;
      }
    );
  }

  ngOnDestroy(): void {
    this.myRecipesObsSub.unsubscribe();
    this.myIngredientsObsSub.unsubscribe();
  }

  onAddNew() {
    this.addNew = true;
  }

  onAddRecipe(recipe: Recipe) {
    this.recipeBookService.addMyRecipe(recipe);
    this.addNew = false;
  }
}
