import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form1Component } from './form1/form1.component';
import {  RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormAssignment1Component } from './form-assignment1/form-assignment1.component';
import { Form2Component } from './form2/form2.component';
import { FormAssignment2Component } from './form-assignment2/form-assignment2.component';

const routes:Routes=[
  {path:'', component:FormsComponent,children:[
    {path:'form1',component:Form1Component},
    {path:'form2',component:Form2Component},
    {path:'assignment1',component:FormAssignment1Component},
    {path:'assignment2',component:FormAssignment2Component},
  ]},
]

@NgModule({
  declarations: [
    Form1Component,
    FormsComponent,
    FormAssignment1Component,
    Form2Component,
    FormAssignment2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[Form1Component,FormsComponent]
})
export class TemplateFormsModule { }
