import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-my-ingredient-item',
  templateUrl: './my-ingredient-item.component.html',
  styleUrls: ['./my-ingredient-item.component.css'],
})
export class MyIngredientItemComponent implements OnInit {
  @Input() ingredient!: Ingredient;
  @Output() onRemoveIngredientEE = new EventEmitter<string>();

  ngOnInit(): void {}

  onRemoveIngredient(ingredientName: string) {
    this.onRemoveIngredientEE.emit(ingredientName);
  }
}
