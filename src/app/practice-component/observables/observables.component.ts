import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { ObsUserService } from './obs-user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent implements OnInit, OnDestroy {
  public id!: number;
  public userActivated: boolean = false;
  public activatedSub!: Subscription;
  public menuList: {
    id: number;
    label: string;
    routing: string | (string | number)[] | null;
  }[] = [
    {
      id: 1,
      label: 'Home',
      routing: ['/observable'],
    },
    {
      id: 2,
      label: 'User1',
      routing: ['user', 1],
    },
    {
      id: 1,
      label: 'User2',
      routing: ['user', 2],
    },
  ];
  constructor(
    private route: ActivatedRoute,
    private obsUserService: ObsUserService
  ) {}
  ngOnInit(): void {
    this.activatedSub = this.obsUserService.activatedEmmiter.subscribe(
      (data) => {
        this.userActivated = data;
      }
    );
  }
  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}
