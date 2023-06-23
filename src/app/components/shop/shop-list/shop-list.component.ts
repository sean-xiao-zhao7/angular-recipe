import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
})
export class ShopListComponent implements OnInit {
  ingredients!: Ingredient[];

  ngOnInit(): void {
    this.ingredients = [
      new Ingredient('Ingredient 1', '', ''),
      new Ingredient('Ingredient 2', '', ''),
      new Ingredient('Ingredient 3', '', ''),
    ];
  }

  onIngredientSelected(ingredient: string) {
    console.log(ingredient);
  }

  onAddedIngredient(ingredient: Ingredient) {}
}
