import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Button } from '../../ComponentCompartilhado/button/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Forms } from '../../ComponentCompartilhado/forms/forms';

@Component({
  selector: 'app-tela-login-component',
  standalone: true,
  imports: [Forms, Button, CommonModule, RouterLink, FormsModule],
  templateUrl: './tela-login-component.html',
  styleUrl: './tela-login-component.css'
})
export class TelaLoginComponent {

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

  updateFormData(data: any) {
    this.formData = data;
    console.log('Dados atualizados:', this.formData);
  }

  
  onLogin() {
  const usersJson = localStorage.getItem('users');
  const users = usersJson ? JSON.parse(usersJson) : [];

  const usuario = users.find((u: { email: any; password: any; }) => 
    u.email === this.formData.email && 
    u.password === this.formData.password
  );

  if (!usuario) {
    this.message = "E-mail ou senha incorretos.";
    return;
  }

  localStorage.setItem('userLogado', JSON.stringify(usuario));

  this.message = "Login realizado!";

  setTimeout(() => {
     this.router.navigate(['/home']);
  }, 1000);
}
}
