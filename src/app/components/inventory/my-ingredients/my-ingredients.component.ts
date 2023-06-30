import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-my-ingredients',
  templateUrl: './my-ingredients.component.html',
  styleUrls: ['./my-ingredients.component.css'],
  providers: [InventoryService],
})
export class MyIngredientsComponent implements OnInit {
  myIngredients: Ingredient[] = [];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.myIngredients = this.inventoryService.getMyIngredients();
  }

  onRemoveIngredient(ingredientName: string) {
    this.inventoryService.removeMyIngredient(ingredientName);
  }
}
