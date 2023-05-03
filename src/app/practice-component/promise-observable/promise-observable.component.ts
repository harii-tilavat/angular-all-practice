import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promise-observable',
  templateUrl: './promise-observable.component.html',
  styleUrls: ['./promise-observable.component.scss'],
})
export class PromiseObservableComponent implements OnInit {


  constructor() {}
  ngOnInit(): void {
    const promise=new Promise((resolve,reject)=>{
      console.log("Promise Call....");
      setTimeout(()=>{
        resolve("Promise Working");
      },1000);
    })
    promise.then((result)=>{
      console.log(result);
    });

    const observable=new Observable((sub)=>{
      let count=0;
      console.log("Observable Call....");
      setInterval(()=>{
        count++;
        sub.next('Observable Working!'+ count);
      },1000);
    });

    observable.subscribe((result)=>{
      console.log(result);
    })
  }
}
