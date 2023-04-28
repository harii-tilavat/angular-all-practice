import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../_model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit{
  public showInput:any;
  ingredients:any=[];

  constructor(private shoppingListService:ShoppingListService) {}
  ngOnInit(): void {
    this.ingredients=this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientChanged
      .subscribe(
        (ingredients:Ingredient[])=>{
          this.ingredients=ingredients;
      });
  }


  deleteItem(index:number):void{
    // this.ingredients.s
    // this.ingredients.splice(index,1);
  }
  toggleInput(index:number):void{
    this.showInput=index;
  }


}
