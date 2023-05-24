import { NgModule } from '@angular/core';
import { PipesComponent } from '../practice-component/pipes/pipes.component';
import { CapitalizePipe, FilterPipe, ShortenPipe } from '.';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PipesComponent,CapitalizePipe,ShortenPipe,FilterPipe],
  imports: [CommonModule,FormsModule],
  exports: [CapitalizePipe,ShortenPipe],
  providers: [],
})
export class PipesModule { }
