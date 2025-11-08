import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Button } from "../../ComponentCompartilhado/button/button";


@Component({
  selector: 'app-tela-login-component',
  standalone: true,
  imports: [FormsModule, CommonModule, Button, RouterLink],
  templateUrl: './tela-login-component.html',
  styleUrl: './tela-login-component.css'
})

export class TelaLoginComponent { 

  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private router: Router) {}

  onLogin() {
    const userData = localStorage.getItem('user');
    if (!userData) {
      this.message = 'Nenhum usuário cadastrado!'
      return;
    }

    const user = JSON.parse(userData);
    if (this.username === user.email && this.password === user.password) {
      this.router.navigate(['/home']);
    } else {
      this.message = 'E-mail ou senha estão incorretos!'
    }
}

VaiProCadastro(){
  this.router.navigate(["/cadastro"])
}

}
