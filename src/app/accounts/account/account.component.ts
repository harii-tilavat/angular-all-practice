import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
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

  setTo(status:string):void{
    console.log(status);
    this.status=status;
  }

  onDelete():void{
    this.accountService.onDelete(this.id);
  }
}
