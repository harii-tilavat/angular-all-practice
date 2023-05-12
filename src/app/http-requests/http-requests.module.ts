import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpRequestsComponent } from './http-requests.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes:Routes=[
  {path:'', component:HttpRequestsComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}
]

@NgModule({
  declarations: [
    HttpRequestsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ]
})
export class HttpRequestsModule { }
