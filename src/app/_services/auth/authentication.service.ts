import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs';
import { AuthResponseModel, User } from 'src/app/_model';
import { environment } from 'src/environments/environment';
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  public unauthenticatedUser: User = new User('', '', '', new Date());
  public user: BehaviorSubject<User> = new BehaviorSubject<User>(this.unauthenticatedUser);
  private expirationTimer: any;
  constructor(private http: HttpClient, private router: Router) { }

  onSignup<T>(email: string, password: string): Observable<AuthResponseModel> {
    return this.http.post<T>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKey,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(catchError(this.handleError), tap((resData: AuthResponseModel) => {
        this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
      }));
  }
  onSignIn<T>(email: string, password: string): Observable<AuthResponseModel> {
    return this.http.post<T>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKey,
      {
        email: email,
        password: password,
        returnSecureToken: true
      })
      .pipe(
        catchError(this.handleError),
        tap((resData: AuthResponseModel) => {
          this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        })
      );
  }
  onLogout(): void {
    this.user.next(new User('', '', '', new Date()));
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.expirationTimer) {
      clearTimeout(this.expirationTimer);
    }
    this.expirationTimer = null;
  }
  autoLogin(): void {
    const userData: { email: string, id: string, _token: string, _tokenExpirationDate: string } = JSON.parse(localStorage.getItem('userData') as string);
    if (!userData) {
      return;
    }
    const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
    if (loadedUser.token) {
      this.user.next(loadedUser);
      const duration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(duration);
    }
  }
  autoLogout(expirationDuration: number): void {
    this.expirationTimer = setTimeout(() => {
      this.onLogout();
    }, expirationDuration);
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
  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user: User = new User(email, userId, token, expirationDate);
    // console.warn('Tap===',user);
    localStorage.setItem('userData', JSON.stringify(user));
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
  }
}
