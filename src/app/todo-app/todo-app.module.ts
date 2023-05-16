import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { TodoAppComponent } from './todo-app.component';
import { TodoComponent } from './todo/todo.component';

const routes:Routes=[
  {path:'', component:TodoAppComponent}
]
@NgModule({
  declarations: [
    TodoAppComponent,
    TodoComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TodoAppModule { }
