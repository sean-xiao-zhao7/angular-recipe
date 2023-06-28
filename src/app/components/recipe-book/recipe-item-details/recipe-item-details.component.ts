import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-item-details',
  templateUrl: './recipe-item-details.component.html',
  styleUrls: ['./recipe-item-details.component.css'],
})
export class RecipeItemDetailsComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Input() myIngredients: Ingredient[] = [];
  IsAddIngredient: boolean = false;

  ngOnInit(): void {}

  onAddIngredient() {
    this.IsAddIngredient = !this.IsAddIngredient;
  }
}
