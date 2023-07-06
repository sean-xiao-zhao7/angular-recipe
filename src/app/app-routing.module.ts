import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopListComponent } from './components/shop/shop-list/shop-list.component';
import { MyIngredientsComponent } from './components/inventory/my-ingredients/my-ingredients.component';
import { RecipeListComponent } from './components/recipe-book/recipe-list/recipe-list.component';

const routes: Routes = [
  {
    path: '',
    component: ShopListComponent,
  },
  {
    path: 'inventory',
    component: MyIngredientsComponent,
  },
  {
    path: 'recipe-book',
    component: RecipeListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
