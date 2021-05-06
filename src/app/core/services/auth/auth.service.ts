import { Token } from './../models/token';
import { TokenService } from './../token/token.service';
import { SetUserAction } from './auth.actions';
import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {tap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  urlApi = 'https://java.bocetos.co/userred-0.0.1-SNAPSHOT/auth';

  constructor(private http: HttpClient, private store: Store ,private tokenService: TokenService, private router: Router) {}


  requestAuth(username: string, password: string): Observable<Token> {
    const raw = `{\n	\"username\": \"${username}\",\n	\"password\": \"${password}\"\n}`;
    return this.http.post<Token>(this.urlApi, raw).pipe(
      tap((data) => {
        const token = data.token;
        if (token){
          this.tokenService.saveToken(token);
          this.setAuthStore(username);
          this.router.navigate(['/dashboard']);
        }
      })
    );
  }
  private setAuthStore(username: string): void {
    const user = new User(username);
    this.store.dispatch(new SetUserAction(user));
  }

  
}
