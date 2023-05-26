import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TestAuthIntercepter implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let modifiedRequest = req.clone({
      headers: req.headers.append("Authorization", "Hello World")
    });
    let anotherModifiedRequest = req.clone({
      url: 'https://dummyjson.com/products/1'
    });
    return next.handle(modifiedRequest);
  }
}
