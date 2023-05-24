import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval, map } from 'rxjs';
import { filter } from 'rxjs';
@Component({
  selector: 'app-obs-home',
  templateUrl: './obs-home.component.html',
  styleUrls: ['./obs-home.component.scss'],
})
export class ObsHomeComponent implements OnInit, OnDestroy {
  public subscription!: Subscription;
  constructor() {}

  // ngOnInit(): void {
  //   // this.subscription = interval(1000)
  //   //   .subscribe((result) => {
  //   //     console.log('Value of Count: ' + result);
  //   //   });
  //   const customObs = Observable.create((observer: any) => {
  //     let count = 0;
  //     setInterval(() => {
  //       observer.next(count);
  //       count++;
  //       if (count > 4) {
  //         observer.error(new Error('Greater then 3!!'));
  //       }
  //       if (count == 6) {
  //         observer.complete();
  //       }
  //     }, 1000);
  //   });
  //   // customObs.pipe(map((data) => { return "Round"+data}));
  //   this.subscription = customObs
  //     .pipe(
  //       map((data) => {
  //         return 'Round ' + data;
  //       })
  //     )
  //     .subscribe(
  //       (data: any) => {
  //         console.log('Count: ' + data);
  //       },
  //       (error: object) => {
  //         console.log('I am ERROR');
  //         console.log(error);
  //         alert(error);
  //       },
  //       () => {
  //         console.log('I am Complete');
  //       }
  //     );
  // }
  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
