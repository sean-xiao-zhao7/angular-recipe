import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
})
export class AddRecipeComponent implements OnInit {
  @Output() addRecipeEmitter = new EventEmitter<Recipe>();
  name = new FormControl('');
  description = new FormControl('');
  imageUrl = new FormControl('');

  constructor() {}

  ngOnInit(): void {}

  onAddRecipe() {
    const recipe = new Recipe(
      this.name.value,
      this.description.value,
      this.imageUrl.value
    );
    this.addRecipeEmitter.emit(recipe);
  }
}