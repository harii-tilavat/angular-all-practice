import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainDemoComponent } from './main-demo/main-demo.component';
import { FormsModule } from '@angular/forms';
import { AssignmentComponent } from './assignment/assignment.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { DataInterchangeComponent } from './data-interchange/data-interchange.component';
import { TestimonalComponent } from './testimonal/testimonal.component';
import { GameControlComponent } from './assignment/game-control/game-control.component';
import { OddComponent } from './assignment/odd/odd.component';
import { EvenComponent } from './assignment/even/even.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { GameControl2Component } from './assignment2/game-control2/game-control2.component';
import { Even2Component } from './assignment2/even2/even2.component';
import { Odd2Component } from './assignment2/odd2/odd2.component';
import { OnlyOddComponent } from './assignment2/only-odd/only-odd.component';
import { ViewchildComponent } from './assignment2/viewchild/viewchild.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountComponent } from './accounts/account/account.component';
import { NewAccountComponent } from './accounts/new-account/new-account.component';
import { UsersComponent } from './users/users.component';
import { ActiveUsersComponent } from './users/active-users/active-users.component';
import { InactiveUsersComponent } from './users/inactive-users/inactive-users.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RoutingComponent } from './routing/routing.component';
import { HomeComponent } from './routing/home/home.component';
import { ServersComponent } from './routing/servers/servers.component';
import { RoutingUsersComponent } from './routing/routing-users/routing-users.component';
import { EditServerComponent } from './routing/servers/edit-server/edit-server.component';
import { ServerComponent } from './routing/servers/server/server.component';
import { UserComponent } from './routing/routing-users/user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    MainDemoComponent,
    AssignmentComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ServerElementComponent,
    DataInterchangeComponent,
    TestimonalComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    Assignment2Component,
    GameControl2Component,
    Even2Component,
    Odd2Component,
    OnlyOddComponent,
    ViewchildComponent,
    DropdownDirective,
    AccountsComponent,
    AccountComponent,
    NewAccountComponent,
    UsersComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    RoutingComponent,
    HomeComponent,
    ServersComponent,
    RoutingUsersComponent,
    EditServerComponent,
    ServerComponent,
    UserComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
