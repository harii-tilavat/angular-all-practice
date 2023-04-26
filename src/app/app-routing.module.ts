import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { RoutingUsersComponent } from './routing/routing-users/routing-users.component';
import { ServersComponent } from './routing/servers/servers.component';
import { UserComponent } from './routing/routing-users/user/user.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'user', component:RoutingUsersComponent},
  {path:'server', component:ServersComponent},
  {path:'user ', component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
