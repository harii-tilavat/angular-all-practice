import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { RoutingUsersComponent } from './routing/routing-users/routing-users.component';
import { ServersComponent } from './routing/servers/servers.component';
import { UserComponent } from './routing/routing-users/user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: RoutingUsersComponent },
  {path:'user/:id',component:UserComponent},
  { path: 'server', component: ServersComponent },
  // {path:'**' , component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
