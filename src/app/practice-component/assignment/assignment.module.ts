import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvenComponent } from './even/even.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { AssignmentComponent } from './assignment.component';



@NgModule({
  declarations: [
    AssignmentComponent,
    EvenComponent,
    GameControlComponent,
    OddComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EvenComponent,
    GameControlComponent,
    OddComponent,
  ]
})
export class AssignmentModule { }
