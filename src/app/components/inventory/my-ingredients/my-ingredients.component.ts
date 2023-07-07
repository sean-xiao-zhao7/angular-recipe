import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-my-ingredients',
  templateUrl: './my-ingredients.component.html',
  styleUrls: ['./my-ingredients.component.css'],
})
export class MyIngredientsComponent implements OnInit, OnDestroy {
  myIngredients: Ingredient[] = [];
  myIngredientsObsSub: any;

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.myIngredientsObsSub = this.inventoryService.myIngredientsObs.subscribe(
      (myIngredients) => {
        this.myIngredients = myIngredients;
      }
    );
  }

  ngOnDestroy(): void {
    this.myIngredientsObsSub.unsubscribe();
  }

  onRemoveIngredient(ingredientName: string) {
    this.inventoryService.removeMyIngredient(ingredientName);
  }
}
