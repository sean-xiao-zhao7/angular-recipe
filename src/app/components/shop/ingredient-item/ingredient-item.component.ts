import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-ingredient-item',
  templateUrl: './ingredient-item.component.html',
  styleUrls: ['./ingredient-item.component.css'],
})
export class IngredientItemComponent implements OnInit {
  @Input() ingredient!: Ingredient;
  @Output() ingredientSelectedEE = new EventEmitter<string>();

  ngOnInit(): void {}

  onSelectIngredient(ingredientName: string) {
    this.ingredientSelectedEE.emit(ingredientName);
  }
}
