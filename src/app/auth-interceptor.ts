import { AuthenticationService } from './authentication.service';
import { HttpHandler, HttpRequest, HttpInterceptor, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthenticationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // get the auth token from the AuthenticationService
    const authToken = this.auth.getToken;
    if (authToken !== '') {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });
      return next.handle(authReq);
    }

    // const httpInterceptorProviders = [
    //   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    // ];
  }
}
