import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() headerTitle!: string;
  @Input() demo:string="I am in Header";
  public subTitle!: string;

  @Output() haritDataSend = new EventEmitter<{ name: string, surName: string }>();
  constructor() { }

  ngOnInit(): void {

  }
  addNameSurName(): void {
    this.haritDataSend.emit({ name: this.headerTitle, surName: this.subTitle })
  }
}
