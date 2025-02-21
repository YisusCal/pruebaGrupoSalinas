import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private loginService: LoginService, private router: Router){}
  user = { 
    email: '', 
    password: '' };

  ngOnInit(): void {
    console.log(this.loginService.isLoggedIn())
    if (this.loginService.isLoggedIn() === true )
      this.router.navigate(['home']);
  }
  onSubmit() {
    this.loginService.generateToken(this.user).subscribe(
      (response) => {
        
        if (response.token) {
          sessionStorage.setItem('token', response.token); // Guardar token
          this.router.navigate(['home']); // Redirigir al home
        } else {
          alert(response.error || 'Error en el login');
        }
        
      },
      (error) => {
        alert('Error en el login');
        console.error(error);
      }
    );
  }
}
