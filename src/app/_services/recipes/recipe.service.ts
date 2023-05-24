import { Injectable } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient, Recipe } from 'src/app/_model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  public recipeChange = new Subject<Recipe[]>;
  private recipes: Recipe[] = [
    new Recipe(
      'Indian Pulao',
      'A super Testy pulao - just awesome!',
      'https://thumbs.dreamstime.com/b/veg-pulao-cooked-masala-spices-served-over-rustic-wooden-background-selective-focus-224434625.jpg',
      [new Ingredient('Rice', 10), new Ingredient('Meat', 1)]
    ),

    new Recipe(
      'American Burgur',
      'What else you need to say?',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JTX4_KsMTAwgpg7zNaZTGZoUH87CuCpuTQ&usqp=CAU',
      [new Ingredient('Meat', 1), new Ingredient('Buns', 2)]
    ),
  ];
  constructor(private shoppingListService: ShoppingListService) { }
  setRecipe(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChange.next(this.recipes.slice());
  }
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    // debugger
    return this.recipes[index];
  }
  toAddShoppingList(ingredient: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredient);
  }
  toAddRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    console.warn(this.recipes);
    this.recipeChange.next(this.recipes.slice());
  }
  toUpdateRecipe(index: number, newRecipe: Recipe): void {
    this.recipes[index] = newRecipe;
    this.recipeChange.next(this.recipes.slice());
  }
  toDeleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChange.next(this.recipes.slice());
    console.log(this.recipes);
  }
}
