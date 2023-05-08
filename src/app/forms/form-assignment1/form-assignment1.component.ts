import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-assignment1',
  templateUrl: './form-assignment1.component.html',
  styleUrls: ['./form-assignment1.component.scss']
})
export class FormAssignment1Component implements OnInit {
  public subscription:string[]=['Basic','Advance','Pro']
  public defaultSubscription:string='Advance';
  public emailValue!:string;
  public subscriptionValue!:string;
  public passwordValue!:string;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmitForm(form:NgForm):void{
    console.log(form);
    this.emailValue=form.value.email;
    this.subscriptionValue=form.value.subscription;
    this.passwordValue=form.value.password;
  }

}
