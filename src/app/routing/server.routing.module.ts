import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { RoutingComponent } from './routing.component';
import { UserComponent } from './routing-users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';

const routes: Routes = [
  {
    path: '',
    component: RoutingComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'servers', component: ServersComponent },
      { path: 'users', component: UserComponent },
      { path: 'users/:id/:name', component: UserComponent },
      { path: 'servers/:id/edit', component: EditServerComponent },
      // { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServerRoutingModule {}
