import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
})
export class AddRecipeComponent implements OnInit {
  @Output() addRecipeEmitter = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  onAddRecipe(data: any) {
    console.log(data);
  }
}
