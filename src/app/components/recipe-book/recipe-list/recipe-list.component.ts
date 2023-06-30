import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { Recipe } from 'src/app/models/recipe';
import { InventoryService } from 'src/app/services/inventory.service';
import { RecipeBookService } from 'src/app/services/recipe-book.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [RecipeBookService, InventoryService],
})
export class RecipeListComponent implements OnInit {
  myRecipes: Recipe[] = [];
  myIngredients: Ingredient[] = [];
  addNew: boolean = false;

  constructor(
    private recipeBookService: RecipeBookService,
    private inventoryService: InventoryService
  ) {}

  ngOnInit(): void {
    this.myRecipes = this.recipeBookService.getMyRecipes();
    this.myIngredients = this.inventoryService.getMyIngredients();
  }

  onAddNew() {
    this.addNew = true;
  }

  onAddRecipe(recipe: Recipe) {
    this.recipeBookService.addMyRecipe(recipe);
    this.myRecipes = this.recipeBookService.getMyRecipes();
    this.addNew = false;
  }
}
