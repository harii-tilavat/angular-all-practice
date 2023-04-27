import { Component } from '@angular/core';

@Component({
  selector: 'app-intercharge',
  templateUrl: './intercharge.component.html',
  styleUrls: ['./intercharge.component.scss']
})
export class InterchargeComponent {

  public user: { name: string, number: number } = {
    name: "Harit",
    number: 234234
  }
  public userDetails: any = [
    {
      name: "Harit",
      sname: "Tilavat",
      email: "abc@gmail.com",
      number: 9898348993
    },
    {
      name: "Rahul",
      sname: "Tiwari",
      email: "rahul@gmail.com",
      number: 3456363563
    },
    {
      name: "Karan",
      sname: "Unagar",
      email: "karan@gmail.com",
      number: 5867556644
    }
  ];
  constructor() {}

  haritData(Data: { name: string, number: number }) {
    console.log("Harit Data ! ");
    console.log(Data);
  }
}
