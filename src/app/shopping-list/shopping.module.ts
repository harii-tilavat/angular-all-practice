import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'', component:ShoppingListComponent},
  
]

@NgModule({
  declarations: [
    ShoppingEditComponent,
    ShoppingListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    ShoppingEditComponent
  ]
})
export class ShoppingModule { }
