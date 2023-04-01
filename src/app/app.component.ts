import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public serverElements: any = [];
  public title = 'Harit Tilavat' ;
  public demoInput="This is App Component in Server Name";
  public demoInput2="This is app Component in server Content"
  constructor() { }

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
