import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubjec = new Subject<boolean>();
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  //generar el token
  public generateToken(loginData: any) {
    return this.httpClient.post(`https://reqres.in/api/login`, loginData);
  }

  public loginUser(token: any) {
    localStorage.setItem('token', token);
  }

  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
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
