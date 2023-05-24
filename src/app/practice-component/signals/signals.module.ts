import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalsComponent } from './signals.component';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { SignalComponent } from './signal/signal.component';

const routes:Routes=[
  {path: '', component: SignalsComponent}
]

@NgModule({
  declarations: [
    SignalsComponent,
    DefaultComponent,
    SignalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SignalsModule { }
