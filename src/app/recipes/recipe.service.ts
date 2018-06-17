import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  //recipeSelected = new EventEmitter<Recipe>();

  private recipes : Recipe[] = [
        new Recipe('Masal Dosa','Test',
        'https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2015/04/Featured-image-masala-dosa-recipe.jpg?ssl=1?w=1269&strip=all&quality=80',
    [
        new Ingredient('Onion',1),
        new Ingredient('CornFlour',3)
    ]),
        new Recipe('Noodles',
        'Test','https://uz71pyzpz0-flywheel.netdna-ssl.com/wp-content/uploads/2018/02/garlic-noodles-61-700x680.jpg',
    [
        new Ingredient('Noodles',1),
        new Ingredient('SOya',4)
    ])
        ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
      return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
