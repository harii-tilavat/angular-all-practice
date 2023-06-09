import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService, DataStorageService } from '../_services';
import { AuthResponseModel } from '../_model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  public authForm!: FormGroup;
  public isLogin: boolean = true;
  public isLoading: boolean = false;
  public error!: string | null;
  public errorMessage!: string | null;
  public isRegistered: boolean = false;
  public authObs!: Observable<AuthResponseModel>;
  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService,private router:Router) { }

  ngOnInit(): void {
    this.authForm = this.fb.group({
      authEmail: ['harit@123gmail.com', [Validators.required, Validators.email]],
      authPassword: [12345678, [Validators.required, Validators.minLength(6)]]
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
    this.authenticationService.testLogin(this.authForm.value.authEmail,this.authForm.value.authPassword).subscribe({
      next:(res)=>{
        console.log(res);
      }
    });
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
          this.router.navigate(['/recipes']);
          // alert(res.registered?'Login SUccessfully!':'Signup Successfully!');
        },
        error: (err) => {
          this.isLoading = false;
          this.error = err;
        },
        complete:()=>{
          this.authForm.reset();
          // this.isLoading = false;
        }
      });
      this.authForm.reset();
    }
  }
  onClose():void{
    this.error=null;
  }
}
