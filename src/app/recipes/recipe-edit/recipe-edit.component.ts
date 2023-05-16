import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  public recipeForm!: FormGroup | any;
  public recipe!: Recipe;
  public recipeSubscription!: Subscription;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router:Router) { }
  ngOnInit(): void {
    this.recipeSubscription = this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      });

  }
  onIngredientAdd(): void {
    (<FormArray>this.recipeForm.controls['ingredients']).push(
      new FormGroup({
        name: new FormControl(null,Validators.required),
        amount: new FormControl(null,Validators.required)
      })
    );
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
      if(recipe['ingredients']){
        for(let item of recipe.ingredients){
          recipeIngredient.push(
            new FormGroup({
              name:new FormControl(item.name,Validators.required),
              amount:new FormControl(item.amount,Validators.required)
            })
          )
        }
      }
    }
    this.recipeForm = new FormGroup({
      recipeName: new FormControl(recipeName, [Validators.required]),
      recipeUrl: new FormControl(recipeUrl, [Validators.required]),
      recipeDescription: new FormControl(recipeDescription, [Validators.required]),
      ingredients: recipeIngredient
    });
  }
  onDeleteIngredient(index:number):void{
    console.log(index);
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
    console.log(this.recipeForm.controls['ingredients'].controls);
  }
  onSaveRecipe(): void {
    let newRecipe = new Recipe(
      this.recipeForm.value['recipeName'],
      this.recipeForm.value['recipeDescription'],
      this.recipeForm.value['recipeUrl'],
      this.recipeForm.value['ingredients']
    );
    console.log(this.recipeForm);
    if (this.editMode) {
      this.recipeService.toUpdateRecipe(this.id,newRecipe);
    }
    else{
      this.recipeService.toAddRecipe(newRecipe);
    }
    this.onCancleRecipe();
  }
  onCancleRecipe():void{
    this.router.navigate(['../'],{relativeTo:this.route});
  }
  ngOnDestroy(): void {
    this.recipeSubscription.unsubscribe();
  }
}
