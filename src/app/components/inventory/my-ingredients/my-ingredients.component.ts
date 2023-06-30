import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-my-ingredients',
  templateUrl: './my-ingredients.component.html',
  styleUrls: ['./my-ingredients.component.css'],
})
export class MyIngredientsComponent implements OnInit {
  myIngredients: Ingredient[] = [];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.inventoryService.myIngredientsObs.subscribe((myIngredients) => {
      console.log(myIngredients);
      this.myIngredients = myIngredients;
    });
  }

  onRemoveIngredient(ingredientName: string) {
    this.inventoryService.removeMyIngredient(ingredientName);
  }
}
