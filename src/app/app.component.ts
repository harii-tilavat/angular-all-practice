import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public serverElements: any = [];
  public title = 'Harit Tilavat' ;

  public name:string="Harit";
  public num!:number;

  public userDetails:any=[
    {
      name:"Harit",
      sname:"Tilavat",
      email:"abc@gmail.com",
      number:9898348993
    },
    {
      name:"Rahul",
      sname:"Tiwari",
      email:"rahul@gmail.com",
      number:3456363563
    },
    {
      name:"Karan",
      sname:"Unagar",
      email:"karan@gmail.com",
      number:5867556644
    }
  ];
  constructor() { }
  updateData(item:string){
    console.log("Value of Output: "+item );
  }
  ngOnInit(): void {
    console.log(this.serverElements);

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
}
