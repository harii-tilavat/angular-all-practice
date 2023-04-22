import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {

  public serverElements: any = [];
  public title = 'Harit Tilavat';

  public name: string = "Harit";
  public num!: number;
  public demo!: any;
  public flag: boolean = true;
  public check: string = 'recipe';

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
  constructor() { }

  ngOnInit(): void {
    console.log(this.serverElements);


  }
  recipe(): void {
    this.flag = !this.flag;
    console.log(this.flag);
  }
  updateData(item: any): void {
    console.warn("Value of Output: " + item.name);
    this.demo = item

  }
  haritData(Data: { name: string, number: number }) {
    console.log("Harit Data ! ");
    console.log(Data);
  }
  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
  haritDataSend(item: any): void {
    console.log(item);
    this.serverElements.push({
      type: 'server',
      name: item.name,
      content: item.surName
    });
  }
  navigate(value: string): void {
    if (value === 'recipe') {
      this.check = value;
    }
    else if (value === 'shopping-list') {
      // console.log("Shopping List");
      this.check = value;
    }
    else {
      console.log("Not selected");
    }
    // console.log("App Value" + value);
  }
}
