import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDemoComponent } from './main-demo/main-demo.component';
import { ServerElementComponent } from './server-element/server-element.component';



@NgModule({
  declarations: [
    MainDemoComponent,
    ServerElementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PracticeModule { }
