import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-only-odd',
  templateUrl: './only-odd.component.html',
  styleUrls: ['./only-odd.component.scss']
})
export class OnlyOddComponent implements OnInit {

  // public flag: boolean = true;
  // public oddNumbers = [1, 3, 5, 7];
  // public evenNumbers = [0, 2, 4, 6];

  constructor() { }
  ngOnInit(): void {

  }
  // change() {
  //   this.flag = !this.flag;
  // }
}
