import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form1Component } from './form1/form1.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms.component';

const routes:Routes=[
  {path:'', component:FormsComponent,children:[
    {path:'form1',component:Form1Component}
  ]},
]

@NgModule({
  declarations: [
    Form1Component,
    FormsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[Form1Component]
})
export class FormsModule { }
