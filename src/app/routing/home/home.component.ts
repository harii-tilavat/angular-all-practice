import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {

  constructor(private route:Router) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.warn("Home Component is Destroyed ");
  }
  loadServer():void{
    console.log("Value of routes! ");
    console.warn(this.route.navigate(['routing','servers']));
  }
}
