import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/_model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],

})
export class RecipeListComponent implements OnInit {

  // @Output() recipeWasSelected = new EventEmitter<Recipe>();

  public img: string = 'https://th.bing.com/th/id/OIP.MqjRmaTRe4575ckKqFvmhwHaFj?pid=ImgDet&rs=1';
  public recipe!: Recipe[];
  // public recipe: Recipe[] = [
  //   new Recipe('Test Recipe', 'This is test Description', 'https://th.bing.com/th/id/OIP.MqjRmaTRe4575ckKqFvmhwHaFj?pid=ImgDet&rs=1'),
  // ];

  constructor(private recipeService: RecipeService) { }
  ngOnInit(): void {
    this.recipe = this.recipeService.getRecipe();
  }

  pushMethod(): void {
    // this.recipe.push(new Recipe(
    //   'New Recipe',
    //   'This is recipe Number 2',
    //   'https://www.bing.com/th?id=OIP.jCTttlKz49sjojN3Igxj-QHaE8&w=197&h=131&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
    //   [new Ingredient("Test", 123), new Ingredient("Test 2", 567)
    // ]))
  }
}
