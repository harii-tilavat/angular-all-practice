import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { DataInterchangeComponent } from './data-interchange/data-interchange.component';
import { TestimonalComponent } from './testimonal/testimonal.component';

import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoComponent } from './todo-app/todo/todo.component';
import { TaskComponent } from './todo-app/task/task.component';
import { InterchargeComponent } from './data-interchange/intercharge/intercharge.component';
import { DirectivesModule } from './_directives/directives.module';
import { PromiseObservableComponent } from './practice-component/promise-observable/promise-observable.component';
import { AuthGuard, RecipeService, ShoppingListService } from './_services';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataInterchangeComponent,
    TestimonalComponent,
    TodoAppComponent,
    TodoComponent,
    TaskComponent,
    InterchargeComponent,
    PromiseObservableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DirectivesModule
  ],
  providers: [ShoppingListService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
