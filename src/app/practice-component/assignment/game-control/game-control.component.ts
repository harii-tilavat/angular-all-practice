import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

  @Output() intervalFired = new EventEmitter<number>();
  interval!: any;
  number:number=0;
  constructor() { }
  ngOnInit(): void {
  }
  onGameStart() {

    console.log("Game started");
    this.interval=setInterval(()=>{
      this.number++;
      this.intervalFired.emit(this.number);
    },1000)
  }
  onGamePouse() {
    clearInterval(this.interval);
  }
  onGameRestart(){
    // this.intervalFired.emit();
  }
}
