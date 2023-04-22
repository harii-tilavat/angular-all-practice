import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control2',
  templateUrl: './game-control2.component.html',
  styleUrls: ['./game-control2.component.scss']
})
export class GameControl2Component implements OnInit {

  @Output() gameEvent = new EventEmitter<number>();
  @Output() changeEvent=new EventEmitter<boolean>();
  public interval!: any;
  public number: number = 0;
  public flag:boolean=true;
  public oddNumbers = [1, 3, 5, 7];
  public evenNumbers = [0, 2, 4, 6];

  constructor() { }
  ngOnInit(): void {
  }

  onStartGame(): void {
    this.interval = setInterval(() => {
      this.number++;
      this.gameEvent.emit(this.number);
    }, 1000);
  }

  onPauseGame(): void {
    clearInterval(this.interval);
  }

  change():void{
    this.flag=!this.flag;
  }
}
