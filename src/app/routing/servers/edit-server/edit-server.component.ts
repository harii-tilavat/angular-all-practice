import { Component, OnInit } from '@angular/core';
import { ServerService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.scss']
})
export class EditServerComponent implements OnInit {
  public server!: { id: number, name: string, status: string };
  public serverName!: string;
  public status!: string;
  constructor(private serverService: ServerService,private route:ActivatedRoute) { }
  ngOnInit(): void {
    // debugger;
    this.server = this.serverService.getServer(1);
    this.serverName = this.server.name;
    this.status = this.server.status;
    console.warn("route");
    console.warn(this.route.snapshot.queryParams);
    this.route.queryParams.subscribe(); //Not understand
    this.route.fragment.subscribe(); //Not understand
    console.warn(this.route.snapshot.fragment);
  }

  onUpdateServer() {
    this.serverService.updateServer(this.server.id, { name:this.serverName, status: this.status });
  }
}
