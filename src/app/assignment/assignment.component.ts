import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent {
  flag:boolean=false;
  items:string[]=[];
  // number:number=1;
  getItem(){
    // this.flag==true?this.flag=false:this.flag=true;
    this.flag=!this.flag;
    // if(this.flag){
    //   this.flag=false;
    // }
    // else{
    //   this.flag=true;
    // }
    // console.log(this.number);
    this.items.push(''+(this.items.length+1));
    // this.number++;
    console.log(this.flag);
    console.log(this.items);
  }
}
