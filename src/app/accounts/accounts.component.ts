import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent implements OnInit {
  public accounts!: { accountName: string; status: string }[];
  constructor(private accountService: AccountService) {}
  ngOnInit(): void {
    this.accounts = this.accountService.account;
    // console.log("In Account Component");
  }
}
