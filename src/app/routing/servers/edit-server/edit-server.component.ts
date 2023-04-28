import { Component, OnInit } from '@angular/core';
import { ServerService } from '../servers.service';
@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.scss']
})
export class EditServerComponent implements OnInit {
  public server!: { id: number, name: string, status: string };
  public serverName!: string;
  public status!: string;
  constructor(private serverService: ServerService) { }
  ngOnInit(): void {
    // debugger;
    this.server = this.serverService.getServer(1);
    console.log("Edit server :");
    this.serverName = this.server.name;
    this.status = this.server.status;
    console.log(this.server);
  }
  onUpdateServer() {
    this.serverService.updateServer(this.server.id, { name:this.serverName, status: this.status });
  }
}
