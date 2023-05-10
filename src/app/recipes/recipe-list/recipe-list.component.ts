import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from 'src/app/_model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/_services';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],

})
export class RecipeListComponent implements OnInit, OnDestroy {
  public recipe!: Recipe[];
  public recipeSubscription!: Subscription;
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();

  // public img: string = 'https://th.bing.com/th/id/OIP.MqjRmaTRe4575ckKqFvmhwHaFj?pid=ImgDet&rs=1';

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.recipe = this.recipeService.getRecipes();
    this.recipeSubscription = this.recipeService.recipeChange
      .subscribe((recipe: Recipe[]) => {
        this.recipe = recipe;
        console.log(this.recipe);
      })
  }

  onNewRecipe(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  ngOnDestroy(): void {
    this.recipeSubscription.unsubscribe();
  }
}
