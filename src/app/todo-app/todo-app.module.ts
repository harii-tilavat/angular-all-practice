import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { TodoAppComponent } from './todo-app.component';

const routes:Routes=[
  {path:'', component:TodoAppComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TodoAppModule { }
