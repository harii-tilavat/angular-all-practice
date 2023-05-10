import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/_model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/_services';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  public recipe!:Recipe;
  public flag:boolean=true;
  public id!:number;
  constructor(private recipeService:RecipeService, private route:ActivatedRoute,private router:Router ) {}
  ngOnInit():void{
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      this.recipe=this.recipeService.getRecipe(this.id);
    })
  }
  check(){
    this.flag=!this.flag;
  }

  toAddShoopingList():void{
    this.recipeService.toAddShoppingList(this.recipe.ingredients);
    alert("Ingredients added Successfully");
  }
  onEditRecipe():void{
    this.router.navigate(['edit'],{relativeTo:this.route});
    // this.router.navigate(['../',this.id,'edit'], {relativeTo:this.route});
  }
  onDelete():void{
    this.recipeService.toDeleteRecipe(this.id);
    this.router.navigate(['../'],{relativeTo:this.route});
  }
}
