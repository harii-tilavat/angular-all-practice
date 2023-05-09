import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/app/_model';
import { RecipeService } from 'src/app/_services';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  public id!: number;
  public editMode: boolean = false;
  public recipeForm!: FormGroup ;
  public recipe!: Recipe;
  public recipeSubscription!: Subscription;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }
  ngOnInit(): void {
    this.recipeSubscription = this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      });
      // console.warn(this.recipeForm.get('ingredients').controls);
      console.warn(this.recipeForm);
  }
  private initForm(): void {
    let recipeName = '';
    let recipeUrl = '';
    let recipeDescription = '';
    let recipeIngredient = new FormArray<any>([]);
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeUrl = recipe.imagePath;
      recipeDescription = recipe.desc;
      // (<FormArray>this.signupForm.controls['hobbies']).push(control);
      if (recipe['ingredients']) {
        for (let item of recipe.ingredients) {
          recipeIngredient.push(
            new FormGroup({
              name: new FormControl(item.name),
              amount: new FormControl(item.amount)
            })
          )
        }
      }
    }
    this.recipeForm = new FormGroup({
      recipeName: new FormControl(recipeName, [Validators.required]),
      recipeUrl: new FormControl(recipeUrl, [Validators.required]),
      recipeDescription: new FormControl(recipeDescription, [Validators.required]),
      ingredients:recipeIngredient
      // ingName: new FormControl(null, [Validators.required]),
      // ingAmount: new FormControl(null, [Validators.required]),
    });
  }
  ngOnDestroy(): void {
    this.recipeSubscription.unsubscribe();
  }
}
