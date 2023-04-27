import { Component, Input, OnInit } from '@angular/core';
import { AccountService,UsersService } from 'src/app/_services';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
 @Input() name!:string;
 @Input() status!:string;
 @Input() id!:number;
  constructor(private accountService:AccountService) {}
  ngOnInit(): void {
    // console.log(this.accountService.account);
  }

testFunction(): void {
  console.log('Hello')
}
  setTo(status:string):void{
    console.log(status);
    this.status=status;
  }

  onDelete():void{
    this.accountService.onDelete(this.id);
  }
}
