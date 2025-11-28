import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Button } from '../../../ComponentCompartilhado/button/button';
import { Forms } from '../../../ComponentCompartilhado/forms/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tela-login-component',
  standalone: true,
  imports: [Forms, Button, CommonModule, RouterLink, FormsModule],
  templateUrl: './tela-login-component.html',
  styleUrl: './tela-login-component.css'
})
export class TelaLoginComponent {

  message = '';
  formData: any = {};

  loginFields = [
    { name: 'email', type: 'email', placeholder: 'nome@exemplo.com', label: 'E-mail ou Usuário' },
    { name: 'password', type: 'password', placeholder: 'Digite Sua Senha', label: 'Senha' }
  ];

  constructor(private router: Router) {}

  updateFormData(dados: any) {
    this.formData = dados;
    console.log('Dados atualizados:');
  }

  onLogin() {
    
    // Transforma em Array
    const usersJson = localStorage.getItem('users');
    const users = usersJson ? JSON.parse(usersJson) : [];

    // Verifica se os Usuarios estão na chave do LocalStorage
    const usuario = users.find(
      (u: any) =>
        u.email == this.formData.email &&
        u.password == this.formData.password
    );

    if (!usuario) {
      this.message = 'E-mail ou senha incorretos.';
      return;
    }

    // Salva o usuario logado e direciona pra pragina principal
    localStorage.setItem('userLogado', JSON.stringify(usuario));
    this.message = 'Login realizado!';

    setTimeout(() => this.router.navigate(['/home']), 1000);
  }
}
