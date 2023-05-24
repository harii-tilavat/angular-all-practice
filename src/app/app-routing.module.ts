import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TestimonalComponent } from './practice-component/testimonal/testimonal.component';
import { InterchargeComponent } from './practice-component/data-interchange/intercharge/intercharge.component';
import { PipesComponent } from './practice-component/pipes/pipes.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationGuard } from './_services';
import { StandAloneComponent } from './practice-component/stand-alone/stand-alone.component';
const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'recipes',canActivate:[AuthenticationGuard], loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule) },
  { path: 'shopping', loadChildren: () => import('./shopping-list/shopping.module').then(m => m.ShoppingModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'accounts', loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule) },
  { path: 'assignment2', loadChildren: () => import('./assignment2/assignment2.module').then(m => m.Assignment2Module) },
  { path: 'routing', loadChildren: () => import('./routing/routing-server.module').then(m => m.RoutingServerModule) },
  { path: 'observable', loadChildren: () => import('./practice-component/observables/observables.module').then(m => m.ObservablesModule) },
  { path: 'forms', loadChildren: () => import('./forms/forms.module').then(m => m.TemplateFormsModule) },
  { path: 'http-request', loadChildren: () => import('./practice-component/http-requests/http-requests.module').then(m => m.HttpRequestsModule) },
  { path: 'standalone', loadChildren: () => import('./practice-component/stand-alone/stand-alone.module').then(m => m.StandAloneModule) },
  { path: 'signals', loadChildren:()=> import('./practice-component/signals/signals.module').then(m=>m.SignalsModule)},
  { path: 'ngrx', loadChildren:()=> import('./practice-component/ngrx/ngrx.module').then(m=>m.NgrxModule)},
  { path: 'auth', component: AuthenticationComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'testimonal', component: TestimonalComponent },
  { path: 'intercharge', component: InterchargeComponent },

  { path: '**', redirectTo: 'recipes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
