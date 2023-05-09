import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RecipeService } from '../_services';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  encapsulation:ViewEncapsulation.None,
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
  constructor(private recipeService:RecipeService) { }
  ngOnInit(): void {
  }
}
