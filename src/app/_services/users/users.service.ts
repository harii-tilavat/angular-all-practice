import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  activeUsers:string[]=["AAA","BBB"];
  inActiveUsers:string[]=["CCC","DDD"];
  
  constructor() { }
  setToInActive(userName:string,index:number):void{
    this.activeUsers.splice(index,1)
    this.inActiveUsers.push(userName);
    console.log("Total Active User" + this.activeUsers.length);
  }
  setToActive(userName:string,index:number):void{
    this.inActiveUsers.splice(index,1)
    this.activeUsers.push(userName);
    console.log("Total Inactive User " + this.inActiveUsers.length);
  }
}
//  MSSQLSERVER