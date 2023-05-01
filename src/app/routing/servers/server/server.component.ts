import { Component, Input, OnInit } from '@angular/core';
import { ServerService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  public server!:{id:number,name:string,status:string};
  constructor(private serverService:ServerService, private route:ActivatedRoute) { }
  ngOnInit(): void {
    const id=this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params:Params)=>{

        this.server=this.serverService.getServer(id);
      }
    )
  }
}
