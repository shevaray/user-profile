import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(!req.headers.has('Auth')){
      const token = localStorage.getItem('token')
      if(token){

        req=req.clone({
          headers:req.headers.set('Auth', token)
        })
      }
    }

    return next.handle(req).pipe()
  }
}
