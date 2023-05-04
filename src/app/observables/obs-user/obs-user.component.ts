import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ObsUserService } from '../obs-user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-obs-user',
  templateUrl: './obs-user.component.html',
  styleUrls: ['./obs-user.component.scss'],
})
export class ObsUserComponent implements OnInit, OnDestroy {
  public id!: number;
  public paramSubscription!: Subscription;
  constructor(
    private route: ActivatedRoute,
    private obsUserService: ObsUserService
  ) {}
  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }
  onActivate(): void {
    this.obsUserService.activatedEmmiter.next(true);
  }
  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }
}
