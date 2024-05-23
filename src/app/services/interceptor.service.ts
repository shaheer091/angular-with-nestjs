import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private commonServ: CommonService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    const currentTime = Date.now() / 1000;
    let modifiedRequest = request;
    if (token) {
      const decodedToken = this.commonServ.parseJwt();
      if (decodedToken.exp < currentTime) {
        alert('Your JWT has been expired. Please login again');
        this.commonServ.logout();
      } else {
        modifiedRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(modifiedRequest);
      }
    }
    return next.handle(modifiedRequest);
  }
}
