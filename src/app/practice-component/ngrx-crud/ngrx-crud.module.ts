import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxCrudComponent } from './ngrx-crud.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path: '', component: NgrxCrudComponent,
    children: [
      { path:'', component:HomeComponent},
      { path:'customers', loadChildren:()=> import('./customers/customers.module').then(m=>m.CustomersModule)}
    ]
  }
]

@NgModule({
  declarations: [
    NgrxCrudComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NgrxCrudModule { }
