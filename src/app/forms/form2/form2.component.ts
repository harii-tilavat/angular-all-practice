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
      email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      gender: new FormControl('Male', [Validators.required]),
      hobbies: new FormArray([]),
    });
  }
  onSubmitForm(): void {
    console.warn(this.signupForm);
    console.log(this.signupForm.controls['email'].errors?.['email']);
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
          resolve({ 'emailForbidden': false });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
