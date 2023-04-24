import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit{
  public showInput:any;
  ngOnInit(): void {
  }
  ingredients:any=[
    new Ingredient("Tomato",5),
    new Ingredient("Apples",10)
  ];

  onAdded(items:{name:string,amount:string}):void{
    this.ingredients.push({name:items.name,amount:items.amount});
    // console.log(this.ingredients);
  }
  deleteItem(index:number):void{
    // this.ingredients.s
    this.ingredients.splice(index,1);
  }
  toggleInput(index:number):void{
    this.showInput=index;
    
  }


}
