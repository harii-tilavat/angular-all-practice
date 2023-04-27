import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RoutingUsersComponent } from './routing-users/routing-users.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { RoutingComponent } from './routing.component';
import { ServerRoutingModule } from './server.routing.module';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './routing-users/user/user.component';
@NgModule({
  declarations: [
    RoutingUsersComponent,
    HomeComponent,
    ServersComponent,
    EditServerComponent,
    ServerComponent,
    RoutingComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    ServerRoutingModule,
    FormsModule
  ],
  exports:[
    ServerComponent,
    EditServerComponent,
    ServersComponent
    // RoutingUsersComponent,
    // ServersComponent
    // HomeComponent
  ]
})
export class RoutingServerModule { }
