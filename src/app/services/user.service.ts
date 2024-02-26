import { Injectable } from '@angular/core';

export interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  constructor() {}

  addUser(newUser: User) {
    this.users.push(newUser);
    console.log('Usuario registrado:', newUser);
  }

  getUser(username: string): User | undefined {
    return this.users.find(user => user.username === username);
  }

  login(username: string, password: string): boolean {
    const user = this.getUser(username);
    if (user && user.password === password) {
      console.log('Inicio de sesión exitoso para:', username);
      return true;
    }
    console.log('Credenciales incorrectas');
    return false;
  }
}
