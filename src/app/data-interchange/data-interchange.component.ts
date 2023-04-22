import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild,ContentChild } from '@angular/core';

@Component({
  selector: 'app-data-interchange',
  templateUrl: './data-interchange.component.html',
  styleUrls: ['./data-interchange.component.scss'],
})
export class DataInterchangeComponent implements OnInit {

  @Input() childName!: string;
  @Input() childNumber!: number;
  @Input() data!: any; //Object
  @Output() updateDataEvent = new EventEmitter<{ name: string, number: number }>();
  @Output() demoEvent = new EventEmitter<{ name: string, number: number }>();
  @Output('hData') haritDataSend = new EventEmitter<{ name: string, number: number }>();
  @Input() element!: { name: string, number: number };
  // @ViewChild('element',{static:true}) element:ElementRef;
  // @ContentChild('element') element:ElementRef
  name!: string;
  sname!: string;
  email!: string;
  number!: (number | string);

  formData:any=[
    {
      desc:"Enter Your first Name",
      refer:this.name,
    },
    {
      desc:"Enter Your last Name",
      refer:this.sname
    },
    {
      desc:"Enter Your Email",
      refer:this.email
    },
    {
      desc:"Enter Your Number",
      refer:this.number
    }
  ]
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
