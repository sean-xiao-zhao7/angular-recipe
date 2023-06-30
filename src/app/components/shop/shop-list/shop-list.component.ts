import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css'],
  providers: [InventoryService],
})
export class ShopListComponent implements OnInit {
  @Input() ingredients: Ingredient[] = [];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {}

  onIngredientSelected(ingredientName: string) {
    this.inventoryService.selectedIngredient(ingredientName);
  }
}
