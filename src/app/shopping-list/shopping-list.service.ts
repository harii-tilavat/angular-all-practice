import { Ingredient } from "../_model";
import { Subject } from "rxjs";
export class ShoppingListService{
   public ingredientChanged=new Subject<Ingredient[]>();
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
        this.ingredientChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}
