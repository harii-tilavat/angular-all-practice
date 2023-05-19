import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService, DataStorageService } from '../_services';
import { AuthResponseModel } from '../_model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  public authForm!: FormGroup;
  public isLogin: boolean = false;
  public isLoading: boolean = false;
  public error!: string | null;
  public errorMessage!: string | null;
  public isRegistered: boolean = false;
  public authObs!: Observable<AuthResponseModel>;
  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.authForm = this.fb.group({
      authEmail: [null, [Validators.required, Validators.email]],
      authPassword: [null, [Validators.required, Validators.minLength(6)]]
    });

  }
  onSwithMode(): void {
    this.isLogin = !this.isLogin;
    console.log(this.authForm);
    this.error = null;
    this.errorMessage = null;
    this.authForm.reset();
  }
  onLogin(): void {
    this.isLoading = true;
    if (!this.authForm.valid) {
      this.isLoading = false;
      this.errorMessage = 'Please fill all required fields!';
    }
    else {
      if (this.isLogin) {
        this.authObs = this.authenticationService.onSignIn<AuthResponseModel>(this.authForm.value.authEmail, this.authForm.value.authPassword);
      }
      else {
        this.authObs = this.authenticationService.onSignup<AuthResponseModel>(this.authForm.value.authEmail, this.authForm.value.authPassword);
      }

      this.authObs.subscribe({
        next: (res) => {
          this.error = null;
          this.isLoading = false;
        },
        error: (err) => {
          this.isLoading = false;
          console.log(err);
          this.error = err;
          this.authForm.reset();
        }
      });
      this.authForm.reset();
    }

  }
  onSubmit() {
    console.log("Submitted");
  }
}
