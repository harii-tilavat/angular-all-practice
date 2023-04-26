import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() userId!:number;
  @Input() userName!:string;
  constructor() {}
  ngOnInit(): void {
  }
  
  changeValue():void{
    console.log("Value of User Id: " + this.userId);
    console.log("Value of User Name: " + this.userName);
  }
}
