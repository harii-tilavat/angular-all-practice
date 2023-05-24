import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  public actions:string[]=[]
  public count:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  onInc():void{
    this.count++;
    this.actions.push('Increment');
  }
  onDec():void{
    this.count--;
    this.actions.push('Decrement');
  }
}
