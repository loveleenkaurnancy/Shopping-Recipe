import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes : Recipe[] = [
        new Recipe('Masal Dosa','Test','https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2015/04/Featured-image-masala-dosa-recipe.jpg?ssl=1?w=1269&strip=all&quality=80'),
        new Recipe('New Masal Dosa','Test','https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2015/04/Featured-image-masala-dosa-recipe.jpg?ssl=1?w=1269&strip=all&quality=80')
        ];

    getRecipes() {
        return this.recipes.slice();
    }
}