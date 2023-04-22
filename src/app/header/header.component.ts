import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() demo!: string;
  @Output() navigationEvent = new EventEmitter<string>();
  public subTitle!: string;
  public headerTitle: string = "Recipe Book";

  @Output() haritDataSend = new EventEmitter<{ name: string, surName: string }>();
  constructor() { }

  ngOnInit(): void {

  }
  addNameSurName(): void {
    this.haritDataSend.emit({ name: this.headerTitle, surName: this.subTitle })
  }

  onSelect(feature: string) {
   this.navigationEvent.emit(feature);
  }
}
