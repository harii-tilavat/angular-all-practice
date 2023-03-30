import { Component } from '@angular/core';
// import { prototype } from 'jasmine';

@Component({
  selector: 'app-main-demo',
  templateUrl: './main-demo.component.html',
  styleUrls: ['./main-demo.component.scss']
})
export class MainDemoComponent {
  port!: String;
  status!: String;
  second: number = 2000;
  allowUser: boolean = true;
  serverStatus: string = 'offl';
  serverName!: string;
  username!: String;
  serverCreated: boolean = false;
  day: number = 0;
  servers: String[] = ["aaa", "bbb", "ccc", "ddd"]
  check: string = Math.random() > 0.3 ? "online" : "offline";
  serverList!: String[];

  constructor() {
    setTimeout(() => {
      this.allowUser = false;
      return this.allowUser;
    }, this.second);
  }

  getServerStatus(status: string) {
    this.status = status;
    return this.status;
  }

  getPort(port: String) {
    this.port = port;
    return this.port;
  }
  onServerCreate() {
    this.serverStatus = "Server was Created! " + this.serverName;
    this.serverCreated = true;
  }
  // Assignment

  usernameUpdate() {
    this.username = "";
    return this.username;
  }

  getColor() {
    if (this.check == 'offline') {
      return "red";
    }
    else {
      return "green"
    }
  }
  getServers():any {

  }
}
