import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  public serverStatus:string='';
  public isDisplay:boolean=false;
  public appStatus:Promise<any>=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('stable');
    },2000);
  });
  public date=new Date();
  public servers:{instanceType:string,name:string,status:string,started:Date}[]=[
    {
      instanceType:'medium',
      name:'Production Server' ,
      status: 'stable',
      started:new Date(15,1,2022)
    },
    {
      instanceType:'large',
      name:'User Database',
      status:'critical',
      started:new Date(15,1,2022)
    },
    {
      instanceType:'small',
      name:'Testing Server',
      status:'stable',
      started:new Date(10,1,2022)
    },
    {
      instanceType:'small',
      name:'Production Server',
      status:'critical',
      started:new Date(10,1,2022)
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  getServer(server:{instanceType:string,name:string,status:string,started:Date}){
    return {
      'list-group-item-success':server.status==='stable',
      'list-group-item-warning':server.status==='offline',
      'list-group-item-danger':server.status==='critical',
    }
  }
  onAddNewServer():void{
    this.servers.push({
      instanceType:'small',
      name:' New Server',
      status:'offline',
      started:new Date(10,1,2022)
    })
  }
  onClick():void{
    this.isDisplay=!this.isDisplay;
  }
}
