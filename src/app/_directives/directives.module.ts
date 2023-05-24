import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown/dropdown.directive';
import { HighlightDirective } from '.';



@NgModule({
  declarations: [
    DropdownDirective,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DropdownDirective,
    HighlightDirective
  ]
})
export class DirectivesModule { }
