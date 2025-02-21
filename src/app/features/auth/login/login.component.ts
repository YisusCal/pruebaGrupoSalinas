import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';
import { emailValidator } from 'src/app/core/validators/email.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router){}
  user = { 
    email: '', 
    password: '' };
  onSubmit() {
    this.loginService.generateToken(this.user).subscribe(
      (response) => {
        // Aquí manejas la respuesta, por ejemplo, almacenando el token
        console.log('Token recibido:', response);
        // Aquí puedes redirigir al usuario si es necesario
      },
      (error) => {
        // Manejo de errores
        console.error('Error al generar el token', error);
      }
    );
  }
}
