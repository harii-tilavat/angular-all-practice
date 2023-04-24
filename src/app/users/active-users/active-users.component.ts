import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit{
  public activeUsers!:string[];
  constructor(private usersService:UsersService) {}
  ngOnInit(): void {
    this.activeUsers=this.usersService.activeUsers;
  }
  setToInActive(userName:string,index:number) :void{
    console.log(this.activeUsers+ "Value : "+ index);
    // this.activeUsers.splice(index,1);
    this.usersService.setToInActive(userName,index);
  }
}
