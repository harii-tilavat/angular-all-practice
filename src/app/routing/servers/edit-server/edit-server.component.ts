import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.scss']
})
export class EditServerComponent implements OnInit {
  public server!: { id: number, name: string, status: string }[];
  public serverName: string = "Testing Server";
  public status: string = "Testing Status";
  constructor(private serverService: ServerService) { }
  ngOnInit(): void {

  }
  updateServer() {

  }
}
