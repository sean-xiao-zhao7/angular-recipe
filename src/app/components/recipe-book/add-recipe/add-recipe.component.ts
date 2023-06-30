import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InventoryService } from 'src/app/services/inventory.service';
import { Recipe } from 'src/app/models/recipe';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
  providers: [InventoryService],
})
export class AddRecipeComponent implements OnInit {
  @Output() addRecipeEmitter = new EventEmitter<Recipe>();
  name = new FormControl('');
  description = new FormControl('');
  imageUrl = new FormControl('');
  ingredients = new FormControl();
  myIngredients: Ingredient[] = [];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.myIngredients = this.inventoryService.getMyIngredients();
  }

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
