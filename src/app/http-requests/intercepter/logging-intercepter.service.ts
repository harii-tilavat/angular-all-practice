import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpEventType } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log("Outgoing request");
    // console.log(req.headers);
    return next.handle(req).pipe(tap((event)=>{
      if(event.type===HttpEventType.Response){
        // console.log("Incoming request");
        // console.log(event.body);
      }
    }));
  }
}
