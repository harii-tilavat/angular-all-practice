import { Component, Input, OnInit } from '@angular/core';
import { ServerService } from '../servers.service';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  // public server!:{id:number,name:string,status:string};
  server!: {id: number, name: string, status: string};
  constructor(private serverService:ServerService ) { }
  ngOnInit(): void {
    this.server=this.serverService.getServer(1);
    console.log("Server Component!");
    console.log(this.server);
  }
}
