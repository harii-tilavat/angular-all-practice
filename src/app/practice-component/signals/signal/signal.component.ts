import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.scss']
})
export class SignalComponent implements OnInit {
  public actions:string[]=[]
  public count=0;
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


