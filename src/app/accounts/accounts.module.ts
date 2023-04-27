import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:AccountsComponent}
]

@NgModule({
  declarations: [
    AccountsComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports :[
    AccountComponent,
    NewAccountComponent
  ]
})
export class AccountsModule { }
