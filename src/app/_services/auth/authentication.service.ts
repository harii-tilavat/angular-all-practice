import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  onSignup<T>(email: string, password: string): Observable<T> {
    return this.http.post<T>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDOvXWkzcYNBEwyaaB6-oMZYvXDhbO35Oc',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(catchError(this.handleError));
  }
  onSignIn<T>(email: string, password: string): Observable<T> {
    return this.http.post<T>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDOvXWkzcYNBEwyaaB6-oMZYvXDhbO35Oc',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(catchError(this.handleError));
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
}
