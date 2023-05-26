import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-success',
  templateUrl: './loader-success.component.html',
  styleUrls: ['./loader-success.component.scss']
})
export class LoaderSuccessComponent implements OnInit {
  @Input() message!:string;
  constructor() { }
  ngOnInit():void{

  }
}
