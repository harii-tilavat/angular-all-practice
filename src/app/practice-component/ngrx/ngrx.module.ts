import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxComponent } from './ngrx.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule} from '@ngrx/store';
import { counterReducer } from './counter.reducer';
const routes: Routes = [
  { path: '', component: NgrxComponent }
]

@NgModule({
  declarations: [
    NgrxComponent,
    MyCounterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forRoot({count:counterReducer})
  ]
})
export class NgrxModule { }
