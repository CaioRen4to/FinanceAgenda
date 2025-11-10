import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Forms } from '../../ComponentCompartilhado/forms/forms';
import { Button } from '../../ComponentCompartilhado/button/button';
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

  imagemLogo: string = 'img/logo-branca.png';

  message: string = '';
  formData: any = {};

  loginFields = [
    { 
      name: 'email', 
      type: 'text', 
      placeholder: 'nome@exemplo.com', 
      label: 'E-mail' 
    },
    { 
      name: 'password', 
      type: 'text', 
      placeholder: '••••••••', 
      label: 'Senha' 
    }
  ];
public: any;

  constructor(private router: Router) {}

  // Atualiza os dados do formulário
  updateFormData(data: any) {
    this.formData = data;
    console.log('Dados atualizados:', this.formData);
  }

  
  onLogin() {
    console.log('Tentando fazer login com:', this.formData);

    // Validar campos
    if (!this.formData.email || !this.formData.password) {
      this.message = "Preencha todos os campos!";
      return;
    }

    // Buscar usuários
    const usersJson = localStorage.getItem('users');
    
    if (!usersJson) {
      this.message = "Nenhum usuário cadastrado.";
      return;
    }
    
    const users: any[] = JSON.parse(usersJson);
    
    // Verificar credenciais
    const foundUser = users.find(user => 
      user.email === this.formData.email && 
      user.password === this.formData.password
    );
    
    if (foundUser) {
      this.message = "Login realizado com sucesso!";
      
      setTimeout(() => {
        this.router.navigate(['/form']);
      }, 1500);

    } else {
      this.message = "Email ou senha incorretos.";
    }
  }
}