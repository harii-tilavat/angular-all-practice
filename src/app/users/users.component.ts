import { Component, ViewEncapsulation ,OnInit} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class UsersComponent implements OnInit{
  constructor() {}
  ngOnInit(): void {
  }
}
