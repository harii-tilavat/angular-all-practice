import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesModule } from '../_directives/directives.module';
// import { DropdownDirective } from '../shared/dropdown.directive';

const routes: Routes = [
  { path: '', component: RecipesComponent }
]
@NgModule({
  declarations: [
    RecipeDetailsComponent,
    RecipeListComponent,
    RecipesComponent,
    RecipeItemComponent,
    // DropdownDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DirectivesModule
  ],
  exports: [
    RecipeDetailsComponent,
    RecipeListComponent,
    RecipeItemComponent,
  ]
})
export class RecipesModule { }
