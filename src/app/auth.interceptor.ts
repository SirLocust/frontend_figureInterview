import { TokenService } from './core/services/token/token.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = this.addToken(req);
    return next.handle(req);
  }

  private addToken(req: HttpRequest<any>): HttpRequest<any>{
    const token = this.tokenService.getToken();
    if (!token) {
      return req;
    }
    req = req.clone({
      setHeaders: {
        Authorization : `Bearer ${token}`,
      },
    });
    return req;
  }
}
