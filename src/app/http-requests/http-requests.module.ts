import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpRequestsComponent } from './http-requests.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PostsService } from './posts.service';
import { AuthIntercepterService } from './intercepter/auth-intercepter.service';

const routes:Routes=[
  {path:'', component:HttpRequestsComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}
]

@NgModule({
  declarations: [
    HttpRequestsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
  providers:[
    PostsService,
  ]
})
export class HttpRequestsModule { }
