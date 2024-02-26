import { Component } from '@angular/core';
import { UserService, User } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    if (!this.username || !this.password) {
      this.errorMessage = 'Por favor ingresa su nombre, un nombre de usuario, contraseña y edad';
      return;
    }

    const existingUser = this.userService.getUser(this.username);
    if (existingUser) {
      this.errorMessage = 'El nombre de usuario ya está en uso';
      return;
    }

    const newUser: User = {
      username: this.username,
      password: this.password
    };
    
    this.userService.addUser(newUser);
    
    console.log('Usuario registrado:', newUser);

    // Redirigir al usuario al login después del registro exitoso
    this.router.navigate(['/login']);
  }
}
