import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
})
export class ShopListComponent implements OnInit {
  @Output() onSelectedIngredientEE = new EventEmitter<string>();
  @Input() ingredients: Ingredient[] = [];

  ngOnInit(): void {
    this.ingredients = [
      new Ingredient('Ingredient 1', '', ''),
      new Ingredient('Ingredient 2', '', ''),
      new Ingredient('Ingredient 3', '', ''),
    ];
  }

  onIngredientSelected(ingredientName: string) {
    this.onSelectedIngredientEE.emit(ingredientName);
  }

  onAddedIngredient(ingredient: Ingredient) {}
}
