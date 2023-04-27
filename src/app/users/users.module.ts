import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserNavigationComponent } from './user-navigation/user-navigation.component';

const routes: Routes = [
  { 
    path: '', component: UsersComponent,
    children:[
      {path:'active', component:ActiveUsersComponent},
      {path:'inactive', component:InactiveUsersComponent},
    ]
  },
]

@NgModule({
  declarations: [
    UsersComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    UserNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ActiveUsersComponent,
    InactiveUsersComponent,
  ]
})
export class UsersModule { }
