import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-users',
  templateUrl: './routing-users.component.html',
  styleUrls: ['./routing-users.component.scss']
})
export class RoutingUsersComponent implements OnInit {

  public users: { id: number, name: string }[] = [
    {
      id: 1,
      name: "AAA"
    },
    {
      id: 2,
      name: "BBB"
    },
    {
      id: 3,
      name: "CCC"
    }
  ]
  constructor() { }
  ngOnInit(): void {

  }

}
