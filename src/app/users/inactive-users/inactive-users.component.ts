import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/_services';
@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent implements OnInit{

  public inActiveUsers!:string[]
  constructor(private usersService:UsersService) {}
  ngOnInit(): void {
    this.inActiveUsers=this.usersService.inActiveUsers;
  }
  setToIncative(userName:string,index:number):void{
    // this.inActiveUsers.splice(index,1);
    this.usersService.setToActive(userName,index);
    // console.log("Name: " + userName);
  }
}
