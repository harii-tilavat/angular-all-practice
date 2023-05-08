import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild,ContentChild } from '@angular/core';

@Component({
  selector: 'app-data-interchange',
  templateUrl: './data-interchange.component.html',
  styleUrls: ['./data-interchange.component.scss'],
})
export class DataInterchangeComponent implements OnInit {

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
  ngOnInit(): void {
  }

  haritData(Data: { name: string, number: number }) {
    console.log("Harit Data ! ");
    console.log(Data);
  }

}
