import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxComponent } from './ngrx.component';
import { MyCounterComponent } from './my-counter/my-counter.component';



@NgModule({
  declarations: [
    NgrxComponent,
    MyCounterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NgrxModule { }
