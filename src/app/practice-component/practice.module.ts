import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDemoComponent } from './main-demo/main-demo.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { PromiseObservableComponent } from './promise-observable/promise-observable.component';



@NgModule({
  declarations: [
    MainDemoComponent,
    ServerElementComponent,
    PromiseObservableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PracticeModule { }
