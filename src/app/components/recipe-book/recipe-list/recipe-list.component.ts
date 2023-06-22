import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes!: Recipe[];

  ngOnInit(): void {
    this.recipes = [
      new Recipe('First', 'First LD', 'First image'),
      new Recipe('Second', 'Second LD', 'Second image'),
      new Recipe('Third', 'Third LD', 'Third image'),
    ];
  }
}
