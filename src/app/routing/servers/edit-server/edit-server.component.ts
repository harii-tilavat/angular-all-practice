import { Component, OnInit } from '@angular/core';
import { ServerService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeativate } from 'src/app/_services';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.scss'],
})
export class EditServerComponent implements OnInit,CanComponentDeativate {
  public server!: { id: number; name: string; status: string };
  public serverName!: string;
  public status!: string;
  public allowEdit: boolean = false;
  public changesSaved:boolean=false;
  constructor(
    private serverService: ServerService,
    private route: ActivatedRoute,
    private router:Router
  ) {}
  ngOnInit(): void {
    // debugger;
    const id=this.route.snapshot.params['id'];
    this.server = this.serverService.getServer(id);
    this.serverName = this.server.name;
    this.status = this.server.status;
    this.route.queryParams.subscribe((queryParams: Params) => {
      console.warn(queryParams['allowEdit']);

      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      console.log(this.allowEdit);
    }); //Not understand
    // this.route.fragment.subscribe(); //Not understand
  }

  onUpdateServer() {
    this.serverService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.status,
    });
    this.changesSaved=true;
    this.router.navigate(['../'],{relativeTo:this.route});
  }
  canDeativate(): boolean | Observable<boolean> | Promise<boolean>{
    // if(!this.allowEdit){
    //   return false;
    // }
    // return false;
    if(!this.allowEdit){
      return true;
    }
    if((this.serverName!==this.server.name || this.status!==this.server.status)&& !this.changesSaved ){
     return confirm("Do you want to discard changes?");
    }
    else{
      return true;
    }
  };
}
