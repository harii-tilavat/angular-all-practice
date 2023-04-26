import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ViewchildComponent } from './viewchild/viewchild.component';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.scss']
})
export class Assignment2Component implements OnInit, AfterViewInit {

  @ViewChild(ViewchildComponent) child!: ViewchildComponent;

  public title!: string;
  public oddNumbers: number[] = [];
  public evenNumbers: number[] = [];
  //  public numbers:number[]=[1,2,3,4,5,6,7,8,9,10];
  constructor() { }

  ngOnInit(): void {
    // console.log("Msg from Parent: "+ this.title);
  }

  ngAfterViewInit(): void {
    // console.log(this.child.title);
  }
  start(number: number) {
    if (number % 2 == 0) {
      this.evenNumbers.push(number);
    }
    else {
      this.oddNumbers.push(number);
    }
  }
}
