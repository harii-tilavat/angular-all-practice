import { BootstrapOptions, Directive ,ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen:boolean=false;
  // @HostBinding('style.color') color !:string;

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
  }
  @HostListener('click') onClick(eventData:Event){
    console.log(this.elRef);
    this.isOpen=!this.isOpen;
    // this.showDropdown=!this.showDropdown;
  }
}
