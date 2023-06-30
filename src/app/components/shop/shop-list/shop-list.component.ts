import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { InventoryService } from 'src/app/services/inventory.service';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
})
export class ShopListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(
    private inventoryService: InventoryService,
    private shopService: ShopService
  ) {}

  ngOnInit(): void {
    this.ingredients = this.shopService.getAllIngredients();
  }

  onIngredientSelected(ingredientName: string) {
    this.inventoryService.selectedIngredient(ingredientName);
  }
}
