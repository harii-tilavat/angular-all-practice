import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDemoComponent } from './main-demo/main-demo.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { PromiseObservableComponent } from './promise-observable/promise-observable.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgrxComponent } from './ngrx/ngrx.component';



@NgModule({
  declarations: [
    MainDemoComponent,
    ServerElementComponent,
    PromiseObservableComponent,
    NgrxComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PracticeModule { }
