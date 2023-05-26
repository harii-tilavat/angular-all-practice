import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { PipesModule } from '../_pipes/pipes.module';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingPageComponent,
  ],
  imports: [PipesModule],
  exports: [
    AlertComponent,
    LoadingPageComponent,
  ],
  providers: [],
})
export class SharedModule { }
