import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {

  constructor(private accountService:AccountService) {}
  ngOnInit(): void {

  }

  onAccountCreate(name:string,status:string){
    console.log("Name: "+name);
    console.log("Status: "+status);
    this.accountService.onAddAccount({accountName:name,status:status});
    console.log("Successfully Pushed Value");
  }

}
