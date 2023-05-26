import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../counter.actions';
@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent implements OnInit {
  public count$!: Observable<number>;
  public test!: Observable<number>;
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }
  ngOnInit(): void {
  }

  increment(): void {
    this.store.dispatch(increment());
  }
  decrement(): void {
    this.store.dispatch(decrement())
  }
  reset(): void {
    this.store.dispatch(reset())
  }

}
