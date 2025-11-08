import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Button } from "../../ComponentCompartilhado/button/button";


@Component({
  selector: 'app-tela-login-component',
  standalone: true,
  imports: [FormsModule, CommonModule, Button, RouterLink, RouterLinkActive],
  templateUrl: './tela-login-component.html',
  styleUrl: './tela-login-component.css'
})

export class TelaLoginComponent { 

  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private router: Router) {}

  onLogin() {
    
    // AQUI: Recuperar o array de usuários e não um único 'user'
    const usersJson = localStorage.getItem('users');

    if (!usersJson) {
        this.message = "Nenhum usuário cadastrado.";
        return;
    }

    const users: any[] = JSON.parse(usersJson);

    // Buscar o usuário com email e senha correspondentes
    const foundUser = users.find(user => 
        user.email === this.username && user.password === this.password
    );
    
    if (foundUser) {

        setTimeout(() => {
        this.router.navigate(['/home']); 
      }, 1500);

    } else {

        this.message = "Email e/ou senha incorretos!";

    }
 }
}