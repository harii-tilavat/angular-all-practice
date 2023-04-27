import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Even2Component } from './even2/even2.component';
import { GameControl2Component } from './game-control2/game-control2.component';
import { Odd2Component } from './odd2/odd2.component';
import { OnlyOddComponent } from './only-odd/only-odd.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { Assignment2Component } from './assignment2.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  { path:'', component:Assignment2Component}
]

@NgModule({
  declarations: [
    Even2Component,
    GameControl2Component,
    Odd2Component,
    OnlyOddComponent,
    ViewchildComponent,
    Assignment2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    Even2Component,
    GameControl2Component,
    Odd2Component,
    OnlyOddComponent,
    ViewchildComponent
  ]
})
export class Assignment2Module { }
