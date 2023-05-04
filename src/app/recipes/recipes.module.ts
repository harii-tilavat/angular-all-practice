import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesModule } from '../_directives/directives.module';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
// import { DropdownDirective } from '../shared/dropdown.directive';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      { path: 'new', component: RecipeEditComponent},
      { path: ':id', component: RecipeDetailsComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
];
@NgModule({
  declarations: [
    RecipeDetailsComponent,
    RecipeListComponent,
    RecipesComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    // DropdownDirective
  ],
  imports: [CommonModule, RouterModule.forChild(routes), DirectivesModule],
  exports: [RecipeDetailsComponent, RecipeListComponent, RecipeItemComponent],
})
export class RecipesModule {}
