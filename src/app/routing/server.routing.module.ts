import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { RoutingComponent } from './routing.component';
import { UserComponent } from './routing-users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { RoutingUsersComponent } from './routing-users/routing-users.component';
import { ServerComponent } from './servers/server/server.component';
import { AuthGuard, CanDeativateGuard } from '../_services';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorMessageComponent } from './error-message/error-message.component';

const routes: Routes = [
  {
    path: '',
    component: RoutingComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'users',
        component: RoutingUsersComponent,
        children: [{ path: ':id/:name', component: UserComponent }],
      },

      {
        path: 'servers',
        component: ServersComponent,
        // canActivate:[AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
          { path: ':id', component: ServerComponent },
          {
            path: ':id/edit',
            component: EditServerComponent,
            canDeactivate: [CanDeativateGuard],
          },
        ],
      },
      {
        path: '**',
        component: ErrorMessageComponent,
        data: { message: 'Page Not found!' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServerRoutingModule {}
