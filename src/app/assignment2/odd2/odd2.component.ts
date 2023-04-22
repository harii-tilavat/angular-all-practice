import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd2',
  templateUrl: './odd2.component.html',
  styleUrls: ['./odd2.component.scss']
})
export class Odd2Component implements OnInit{
  @Input() number!: number;

  constructor() {}
  ngOnInit():void{

  }
}
