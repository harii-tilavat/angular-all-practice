import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  public selectedRecipe!: Recipe;
  constructor() { }
  ngOnInit(): void {

  }

  selected(recipe: Recipe): void {
    console.log("Recipe Recived: ")
    console.log(recipe);
    this.selectedRecipe=recipe;
    console.log("Selected recipe by Assignment: ");
    console.log(this.selected);
  }
}
