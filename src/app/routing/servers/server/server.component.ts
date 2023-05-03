import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ServerService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit, OnDestroy {
  public server!:{id:number,name:string,status:string};
  public subscription!:Subscription;
  constructor(private serverService:ServerService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    // const id=this.route.snapshot.params['id'];
   this.subscription= this.route.params.subscribe(
      (params:Params)=>{
        this.server=this.serverService.getServer(params['id']);
      }
    )
  }

  onEdit():void{
    this.router.navigate(['edit'], {relativeTo:this.route, queryParamsHandling:'preserve'});
  }
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
