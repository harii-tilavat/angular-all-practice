import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesComponent } from './observables.component';
import { ObsHomeComponent } from './obs-home/obs-home.component';
import { ObsUserComponent } from './obs-user/obs-user.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../routing/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: ObservablesComponent,

    children: [{ path: '', component: ObsHomeComponent },{ path: 'user/:id', component: ObsUserComponent }],
  },
];
@NgModule({
  declarations: [ObservablesComponent, ObsHomeComponent, ObsUserComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ObservablesModule { }
