import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/_model';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Input() id!:number;
  constructor(private recipeService:RecipeService,private router:Router,private route:ActivatedRoute ) {}
  ngOnInit():void{

  }
  // onSelected(){
  //   this.recipeService.recipeSelected.emit(this.recipe);
  //   this.router.navigate([this.id,],{relativeTo:this.route});
  // }
}
