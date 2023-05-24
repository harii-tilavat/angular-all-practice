import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StandAloneComponent } from './stand-alone.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: StandAloneComponent }
]
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [],
})
export class StandAloneModule { }
