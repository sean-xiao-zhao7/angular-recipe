import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipe-book/recipe-item/recipe-item.component';
import { RecipeItemDetailsComponent } from './components/recipe-book/recipe-item-details/recipe-item-details.component';
import { ShopListComponent } from './components/shop/shop-list/shop-list.component';
import { ShopListEditComponent } from './components/shop/shop-list-edit/shop-list-edit.component';
import { IngredientItemComponent } from './components/shop/ingredient-item/ingredient-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';
import { MyIngredientsComponent } from './components/inventory/my-ingredients/my-ingredients.component';
import { MyIngredientItemComponent } from './components/inventory/my-ingredient-item/my-ingredient-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeItemDetailsComponent,
    ShopListComponent,
    ShopListEditComponent,
    IngredientItemComponent,
    HeaderComponent,
    NavBarComponent,
    MyIngredientsComponent,
    MyIngredientItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
