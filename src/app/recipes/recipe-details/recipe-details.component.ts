import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/_model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe!:Recipe;
  public flag:boolean=true;

  constructor(private recipeService:RecipeService ) {}
  ngOnInit():void{
  }
  check(){
    this.flag=!this.flag;
  }

  toAddShoopingList():void{
    this.recipeService.toAddShoppingList(this.recipe.ingredients);
    alert("Ingredients added Successfully");
  }
}
