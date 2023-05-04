import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestimonalComponent } from './testimonal/testimonal.component';
import { InterchargeComponent } from './data-interchange/intercharge/intercharge.component';
const routes: Routes = [
  // { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule) },
  { path: 'shopping', loadChildren: () => import('./shopping-list/shopping.module').then(m => m.ShoppingModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'accounts', loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule) },
  { path: 'assignment2', loadChildren: () => import('./assignment2/assignment2.module').then(m => m.Assignment2Module) },
  { path: 'todo-app', loadChildren:()=> import('./todo-app/todo-app.module').then(m=>m.TodoAppModule)},
  { path: 'routing', loadChildren: () => import('./routing/routing-server.module').then(m => m.RoutingServerModule) },
  { path:'observable', loadChildren:()=> import('./observables/observables.module').then(m=>m.ObservablesModule)},
  { path: 'testimonal', component: TestimonalComponent },
  { path: 'intercharge', component: InterchargeComponent },

  // { path: '**', redirectTo: 'recipes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
