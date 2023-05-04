import { Injectable } from '@angular/core';
import { Recipe } from '../_model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from '../_model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
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
  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  toAddShoppingList(ingredient: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredient);
  }
}
