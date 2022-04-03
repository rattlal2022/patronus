import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';

import {environment} from "@src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    let requestHeaders = request.headers;
    requestHeaders = request.headers.set(environment.apiAuthorizationHeaderName, environment.apiAuthorizationToken);
    const modifiedReq = request.clone({headers: requestHeaders});

    return next.handle(modifiedReq);
  }
}
