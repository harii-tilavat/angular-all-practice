import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  ingredients:any=[
    new Ingredient("Tomato",5),
    new Ingredient("Apples",10)
  ];
  checkDebug(){
    for(let i of this.ingredients){
      console.log("Value of I: "+ i);
    }
  }
}
