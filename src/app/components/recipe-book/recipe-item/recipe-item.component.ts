import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  recipe: Recipe;

  constructor(recipe: Recipe) {
    this.recipe = recipe;
  }

  ngOnInit(): void {}
}
