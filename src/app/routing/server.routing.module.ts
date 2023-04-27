import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from '../users/users.component';
import { HomeComponent } from './home/home.component';
import { RoutingComponent } from './routing.component';
import { UserComponent } from './routing-users/user/user.component';

const routes: Routes = [
    {
      path:'', component:RoutingComponent,
      children: [
        {path:'home', component:HomeComponent},
        {path:'servers' , component:ServersComponent},
        {path:'user', component:UserComponent}
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerRoutingModule { }
