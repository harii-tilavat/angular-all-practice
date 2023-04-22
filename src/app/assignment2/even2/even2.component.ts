import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even2',
  templateUrl: './even2.component.html',
  styleUrls: ['./even2.component.scss']
})
export class Even2Component implements OnInit {

  @Input() number!: number;

  constructor() { }

  ngOnInit(): void {

  }
}
