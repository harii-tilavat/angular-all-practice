import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  public authForm!:FormGroup;
  public isLogin:boolean=false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.authForm=new FormGroup({
      authEmail:new FormControl(null,[Validators.required,Validators.email]),
      authPassword:new FormControl(null,[Validators.required]),

    });
  }
  onSwithMode():void{
    this.isLogin=!this.isLogin;
  }
}
