import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
export class RecipeService{

    public recipeSelected= new EventEmitter<Recipe>();
    private recipe: Recipe[] = [
        new Recipe('Test Recipe', 'This is test Description', 'https://th.bing.com/th/id/OIP.MqjRmaTRe4575ckKqFvmhwHaFj?pid=ImgDet&rs=1'),
      ];
    constructor() {}

    getRecipe(){
        return this.recipe.slice();
    }
}