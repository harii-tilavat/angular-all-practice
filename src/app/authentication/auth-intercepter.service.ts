import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable, exhaustMap, take } from 'rxjs';
import { AuthenticationService } from '../_services';
import { User } from '../_model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authenticationService:AuthenticationService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authenticationService.user
    .pipe(
      take(1),
      exhaustMap((user:User)=>{
        if(!user){
          return next.handle(req);
        }
        const modifiedRequest=req.clone({params:new HttpParams().set('auth',user.token)})
        return next.handle(modifiedRequest);
      })
    )
  }
}
