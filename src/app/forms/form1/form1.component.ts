import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {
  @ViewChild('form') form!:NgForm;
  public defaultQuestion:string='pet';
  public userName!:string;
  public email!:string;
  public secretQuestion!:string;
  public message!:string;
  // public flag:boolean=true;
  // public input!:string;
  public questionAnswer!:string;
  public gender:string[]=['Male','Female'];
  public defaultGender:string='Male';
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit():void{
    console.log("Submitted");
    this.userName=this.form.value.userData.username;
    this.email=this.form.value.userData.email;
    this.secretQuestion=this.form.value.secret;
    this.message=this.form.value.qna
    console.log(this.message);
    // console.log(this.form.value);
  }
  onChangeRadio(item:any){
    console.warn(item.target.value);
  }
}
