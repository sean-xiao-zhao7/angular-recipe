import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-item-details',
  templateUrl: './recipe-item-details.component.html',
  styleUrls: ['./recipe-item-details.component.css'],
})
export class RecipeItemDetailsComponent implements OnInit {
  recipe: Recipe;

  constructor(recipe: Recipe) {
    this.recipe = recipe;
  }

  ngOnInit(): void {}
}
