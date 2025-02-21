import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubjec = new Subject<boolean>();
  constructor(
    private httpClient: HttpClient,
  ) {}

  //generar el token
  public generateToken(loginData: any) {
    return this.httpClient.post<{ token?: string; error?: string }>(`https://reqres.in/api/login`, loginData);
  }

  public loginUser(token: any) {
    localStorage.setItem('token', token);
  }

  public isLoggedIn() {
    let tokenStr = sessionStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('usuario');
    return true;
  }

  public getToken() {
    return localStorage.getItem('token');
  }
}
