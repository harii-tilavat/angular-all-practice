import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-data-interchange',
  templateUrl: './data-interchange.component.html',
  styleUrls: ['./data-interchange.component.scss'],
})
export class DataInterchangeComponent implements OnInit {

  @Input() childName!: string;
  @Input() childNumber!: number;

  @Input() data!: any; //Object

  // @Output() updateDataEvent = new EventEmitter<{   ḍname: string, number: number }>();
  @Output() updateDataEvent = new EventEmitter<{ name: string, number: number }>();
  @Output() demoEvent = new EventEmitter<{ name: string, number: number }>();
  @Output('hData') haritDataSend = new EventEmitter<{ name: string, number: number }>();
  name!: string;
  sname!: string;
  email!: string;
  number!: (number | string);
  @Input() element!: { name: string, number: number };
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
    // alert(`${this.name} Bhai! Your Data Inserted Successfully! 😉`);
    this.name = "";
    this.sname = "";
    this.email = "";
    this.number = "";
    this.updateDataEvent.emit({ name: "harit", number: 232323 });
    this.demoEvent.emit({ name: "Harit Bhai ", number: 4535345 });
    this.haritDataSend.emit({ name: "Harit", number: 25423452 });
  }
  localRef(input:any) {
    console.log("Value of Input: ");
    console.log(input.value);
  }
}
