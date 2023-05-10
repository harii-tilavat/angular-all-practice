import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class FormsComponent implements OnInit {
  public formList:{id:number,label:string,routing:string[] | string | null }[]=[
    {
      id:1,
      label:'Form 1',
      routing:['form1']
    },
    {
      id:2,
      label:'Form 2',
      routing:['form2']
    },
    {
      id:3,
      label:'Form-assignment-1',
      routing:['assignment1']
    },
    {
      id:4,
      label:'Form-assignment-1',
      routing:['assignment2']
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
}
