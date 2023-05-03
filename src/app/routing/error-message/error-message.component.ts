import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit, OnDestroy {
  public errorMessage!: string;
  public subscription!: Subscription;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe((data: Data) => {
      this.errorMessage = data['message'];
      // console.log(data['message']);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
