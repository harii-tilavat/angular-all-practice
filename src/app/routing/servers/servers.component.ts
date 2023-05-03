import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/_services';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  public servers!: { id: number; name: string; status: string }[];

  constructor(
    private serverService: ServerService,
    private router: Router,
    private rout: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.servers = this.serverService.getServers();
  }
  onRealodPage(): void {
    this.router.navigate(['routing', 'servers']);
  }
}
