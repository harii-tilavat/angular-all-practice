import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss'],
})
export class Form2Component implements OnInit {
  public gender: string[] = ['Male', 'Female'];
  public signupForm!: FormGroup;
  public forbiddenUserNames: string[] = ['aaa', 'bbb'];
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        this.forbiddenNames.bind(this),
      ]),
      email: new FormControl(null, [Validators.required,Validators.email], this.forbiddenEmails),
      number:new FormControl(null, [Validators.required],[this.notValidNumber]),
      gender: new FormControl('Male', [Validators.required]),
      age: new FormControl(null, [Validators.required]),
      hobbies: new FormArray([]),
    });
    // this.signupForm.patchValue({
    //   username:'Harit',
    // });
    // this.signupForm.valueChanges
    //   .subscribe((data)=>{
    //     console.log(data);
    //   })
  }
  onSubmitForm(): void {
    console.warn(this.signupForm);
  }
  onAddHobby(): void {
    const control = new FormControl(null);
    (<FormArray>this.signupForm.controls['hobbies']).push(control);
  }
  forbiddenNames(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }
  forbiddenEmails(control: AbstractControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ 'emailForbidden': true });
        } else {
          resolve(null);
        }
      });
    });
  }
  notValidNumber(control:AbstractControl):Promise<any> | Observable<any>{
    return new Promise((resolve,reject)=>{
      if(control.value.length!=10){
        resolve({'notValidNumber':true});
      }
      else{
        resolve(null);
      }
    })
  }
  textNotAllowed(control:AbstractControl):Promise<any> | Observable<any> {
    return new Promise((resolve,reject)=>{
      if(isNaN(control.value)){
        resolve({'textNotAllowed':true});
      }
      else{
        resolve(null);
      }
    });
  }
}
