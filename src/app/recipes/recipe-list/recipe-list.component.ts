import { Component } from '@angular/core';
import {Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  img:string='https://th.bing.com/th/id/OIP.MqjRmaTRe4575ckKqFvmhwHaFj?pid=ImgDet&rs=1';
  recipe:Recipe[]=[
    new Recipe('Test Recipe','This is test Description','https://th.bing.com/th/id/OIP.MqjRmaTRe4575ckKqFvmhwHaFj?pid=ImgDet&rs=1'),
    new Recipe('New Recipe','This is recipe Number 2' ,'https://www.tasteofhome.com/wp-content/uploads/2018/01/Slow-Cooked-Vegetable-Curry_EXPS_SDAS17_148481_D04_07_5b.jpg'),
    new Recipe('New Recipe','This is recipe Number 3','https://th.bing.com/th/id/OIP.MqjRmaTRe4575ckKqFvmhwHaFj?pid=ImgDet&rs=1'),
    new Recipe('New Recipe','This is recipe Number 4','https://www.tasteofhome.com/wp-content/uploads/2018/01/Slow-Cooked-Vegetable-Curry_EXPS_SDAS17_148481_D04_07_5b.jpg'),
  ];
  pushMethod():void{
    this.recipe.push(new Recipe('New Recipe','This is recipe Number 5','https://th.bing.com/th/id/OIP.MqjRmaTRe4575ckKqFvmhwHaFj?pid=ImgDet&rs=1'))
  }
}
