import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    const token = sessionStorage.getItem('token'); // Obtener token

    if (token) {
      return true; // Si hay token, permite el acceso
    } else {
      this.router.navigate(['/login']); // Si no hay token, redirige al login
      return false;
    }
  }
  
}
