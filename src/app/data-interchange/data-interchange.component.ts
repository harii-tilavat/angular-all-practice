import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data-interchange',
  templateUrl: './data-interchange.component.html',
  styleUrls: ['./data-interchange.component.scss']
})
export class DataInterchangeComponent implements OnInit {

  @Input() childName!: string;
  @Input() childNumber!: number;

  @Input() data!: any; //Object

  @Output() updateDataEvent =new EventEmitter<string>();
  name!: string;
  sname!: string;
  email!: string;
  number!: (number | string);

  constructor() {
  }

  ngOnInit(): void {
    // console.log(this.sendData);
  }

  addData(): void {
    console.log(this.data);
    this.data.push({
      name: this.name,
      sname: this.sname,
      email: this.email,
      number: this.number
    });
    alert(`${this.name} Bhai! Your Data Inserted Successfully! 😉`);
    this.name = "";
    this.sname = "";
    this.email = "";
    this.number = "";
    this.updateDataEvent.emit("Harit bhai tilavat");
  }
}
