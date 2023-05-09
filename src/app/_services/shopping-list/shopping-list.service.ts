import { Subject } from "rxjs";
import { Ingredient, Recipe } from "src/app/_model";
export class ShoppingListService {
  public ingredientChanged = new Subject<Ingredient[]>();
  public startedEditing = new Subject<number>();
  public ingredients: any = [
    new Ingredient("Tomato", 50),
    new Ingredient("Apples", 10),
  ]
  constructor() { }

  getIngredients(): void {
    return this.ingredients.slice();
  }
  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }
  addItem(nameInput: string, amountInput: number): void {
    this.ingredients.push({ name: nameInput, amount: amountInput });
    this.ingredientChanged.next(this.ingredients.slice());
  }
  updateItem(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }
  deleteItem(index:number){
    this.ingredients.splice(index,1);
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
