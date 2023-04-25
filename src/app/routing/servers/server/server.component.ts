import { Component, Input, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  public servers!:{id:number,name:string,status:string};

  constructor(private serverService:ServerService ) { }
  ngOnInit(): void {
    // this.servers.name=this.serverService.;
    // this.servers.status=this.serverService.status;
    console.log("IN server component: ");
    // console.error(this.servers.name);
    // this.servers=this.serverService.getServer();
    // this.servers=this.serverService.getServer();
  }


}
