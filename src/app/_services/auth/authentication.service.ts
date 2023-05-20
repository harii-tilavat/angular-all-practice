import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, catchError, tap } from 'rxjs';
import { AuthResponseModel, User } from 'src/app/_model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  public unauthenticatedUser: User = new User('', '', '', new Date());
  public user:BehaviorSubject<User> = new BehaviorSubject<User>(this.unauthenticatedUser);
  constructor(private http: HttpClient,private router:Router) { }

  onSignup<T>(email: string, password: string): Observable<AuthResponseModel> {
    return this.http.post<T>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDOvXWkzcYNBEwyaaB6-oMZYvXDhbO35Oc',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(catchError(this.handleError), tap((resData: AuthResponseModel) => {
        this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expireIn);
      }));
  }
  onSignIn<T>(email: string, password: string): Observable<AuthResponseModel> {
    return this.http.post<T>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDOvXWkzcYNBEwyaaB6-oMZYvXDhbO35Oc',
      {
        email: email,
        password: password,
        returnSecureToken: true
      })
      .pipe(
        catchError(this.handleError),
        tap((resData: AuthResponseModel) => {
          this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expireIn);
          localStorage.setItem('auth',resData.idToken);
          localStorage.key(2);
        })
      );
  }
  onLogout():void{
    this.user.next(new User('','','',new Date()));
    this.router.navigate(['/auth']);
  }
  private handleError(errRespose: HttpErrorResponse): Observable<any> {
    let errorMessage = "An unknown error!"
    switch (errRespose.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = "Email is already exist!";
        break;
      case 'INVALID_PASSWORD':
        errorMessage = "Invalid Password!";
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = "Email is not exist!";
        break;
      default:
        throw errRespose.error.error.message;
    }
    throw errorMessage;
  }
  private handleAuthentication(email: string, userId: string, token: string, expirationIn: number) {
    const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
    const user: User = new User(email, userId, token, expirationDate);
    console.warn('Tap===', user);
    this.user.next(user);
  }
}
