import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  public img: string = 'https://th.bing.com/th/id/OIP.MqjRmaTRe4575ckKqFvmhwHaFj?pid=ImgDet&rs=1';
  public recipe: Recipe[] = [
    new Recipe('Test Recipe', 'This is test Description', 'https://th.bing.com/th/id/OIP.MqjRmaTRe4575ckKqFvmhwHaFj?pid=ImgDet&rs=1'),
  ];

  constructor() { }
  ngOnInit(): void {
  }

  pushMethod(): void {
    this.recipe.push(new Recipe('New Recipe', 'This is recipe Number 2', 'https://www.bing.com/th?id=OIP.jCTttlKz49sjojN3Igxj-QHaE8&w=197&h=131&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'))
  }

  onRecipeSelect(value: Recipe) {
    console.log("Emited Value: ");

    console.log(value);
    this.recipeWasSelected.emit(value);
  }
}
