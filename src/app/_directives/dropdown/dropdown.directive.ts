import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  @Input() focusClose = null as unknown as string;
  @HostBinding('class.open') isOpen: boolean = false;
  // @HostBinding('style.color') color !:string;
  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    console.log('Drodown Directive is Open');
  }
  // @HostListener('click' ,['$event']) onThisClick(){
  //   this.isOpen=true;
  // }
  @HostListener('document:click', ['$event']) onClick(eventData: Event) {
    // this.isOpen = !this.isOpen;
    if (!this.elRef.nativeElement.contains(eventData.target)) {
      this.isOpen = false;
    } else {
      this.isOpen = true;
    }
    eventData.preventDefault();
    eventData.stopPropagation();
  }
}
