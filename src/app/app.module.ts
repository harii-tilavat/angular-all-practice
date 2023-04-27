import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainDemoComponent } from './main-demo/main-demo.component';
import { FormsModule } from '@angular/forms';
import { AssignmentComponent } from './assignment/assignment.component';
import { HeaderComponent } from './header/header.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { DataInterchangeComponent } from './data-interchange/data-interchange.component';
import { TestimonalComponent } from './testimonal/testimonal.component';
import { GameControlComponent } from './assignment/game-control/game-control.component';
import { OddComponent } from './assignment/odd/odd.component';
import { EvenComponent } from './assignment/even/even.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoComponent } from './todo-app/todo/todo.component';
import { TaskComponent } from './todo-app/task/task.component';
import { InterchargeComponent } from './data-interchange/intercharge/intercharge.component';
import { DirectivesModule } from './_directives/directives.module';

@NgModule({
  declarations: [
    AppComponent,
    MainDemoComponent,
    AssignmentComponent,
    HeaderComponent,
    ServerElementComponent,
    DataInterchangeComponent,
    TestimonalComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    TodoAppComponent,
    TodoComponent,
    TaskComponent,
    InterchargeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DirectivesModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
