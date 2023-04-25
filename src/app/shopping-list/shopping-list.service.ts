import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
   public ingredientChanged=new EventEmitter<Ingredient[]>();
    public ingredients:any=[
        new Ingredient("Tomato",50),
        new Ingredient("Apples",10),
    ]
    constructor() {}

    getIngredients():void{
        return this.ingredients.slice();
    }
    addItem(nameInput:string,amountInput:string):void{
        this.ingredients.push({name:nameInput,amount:amountInput});
        this.ingredientChanged.emit(this.ingredients.slice());
    }
    addIngredients(ingredients:Ingredient[]){
        console.log("Add Ingredients Before: ");
        console.warn(this.ingredients);
        this.ingredients.push(...ingredients);
        console.log("Add Ingredients AFter: ");  
        console.warn(this.ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}