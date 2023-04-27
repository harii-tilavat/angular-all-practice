import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public account: { accountName: string, status: string }[] = [
    {
      accountName: "Master",
      status: "active"
    },
    {
      accountName: "Hidden",
      status: "hidden"
    },
    {
      accountName: "Test",
      status: "inactive"
    },
  ]
  constructor() { }

  onAddAccount(account:{accountName:string,status:string}):void{
    this.account.push(account);
  }
  onDelete(id:number):void{
    this.account.splice(id,1);
  }
}
