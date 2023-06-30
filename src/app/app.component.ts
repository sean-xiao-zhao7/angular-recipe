import { Component } from '@angular/core';
import { Ingredient } from './models/ingredient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My Recipes';
  section = 'shop';

  // available contents
  allIngredients = [
    new Ingredient('Ingredient 1', '', ''),
    new Ingredient('Ingredient 2', '', ''),
    new Ingredient('Ingredient 3', '', ''),
  ];

  onChangeSection(section: string) {
    this.section = section;
  }
}
