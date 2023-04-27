import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent {
  flag:boolean=false;
  items:string[]=[];

  oddNumbers:number[]=[]
  evenNumbers:number[]=[]
  start(number:number){
    // console.log("Number Is: "+ number);
    if(number%2==0){
      this.evenNumbers.push(number);
    }
    else{
      this.oddNumbers.push(number);
    }
    console.log("Odd Number: ");
    console.log(this.oddNumbers);
    console.log("Even Number: ");
    console.log(this.evenNumbers);
  }
  getItem(){
    this.flag=!this.flag;
    this.items.push(''+(this.items.length+1));
    // this.number++;
    console.log(this.flag);
    console.log(this.items);
  }
}
