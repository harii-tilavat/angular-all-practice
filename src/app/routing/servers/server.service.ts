import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  public serverName!: string;
  public status!: string;
  public servers: { id: number, name: string, status: string }[] = [
    {
      id: 1,
      name: "Production Server",
      status: "offline"
    },
    {
      id: 2,
      name: "Test Server",
      status: "online"
    },
    {
      id: 3,
      name: "Dev Server",
      status: "online"
    },
  ]
  constructor() { }

  getServers() {
    return this.servers;
  }

  getServer(id: number): any {
    return this.servers.find(s => s.id==id);
   
  }

  updateServer(id: number, serverInfo: { name: string, status: string }) {
    const server = this.servers.find(s => s.id==id);
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
