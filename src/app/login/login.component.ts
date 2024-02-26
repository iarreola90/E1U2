import { Component } from '@angular/core';
import { UserService, User } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    if (!this.username || !this.password) {
      this.errorMessage = 'Por favor ingresa un nombre de usuario y contraseña';
      return;
    }

    const newUser: User = {
      username: this.username,
      password: this.password
    };
    
    this.userService.addUser(newUser);
    
    console.log('Usuario agregado:', newUser);

    // Redirigir al usuario a '/dashboard' después de iniciar sesión
    this.router.navigate(['/dashboard']);
  }
}

