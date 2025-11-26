import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from '../../../ComponentCompartilhado/button/button';
import { Forms } from '../../../ComponentCompartilhado/forms/forms';

@Component({
  selector: 'app-cadastro-component',
  imports: [FormsModule, CommonModule, Button, Forms, RouterModule],
  templateUrl: './cadastro-component.html',
  styleUrl: './cadastro-component.css'
})
export class CadastroComponent {

  message = '';
  formData: any = {};

  cadastroFields = [
    { name: 'nome', type: 'text', placeholder: 'Digite seu nome', label: 'Nome' },
    { name: 'email', type: 'text', placeholder: 'Digite seu e-mail', label: 'E-mail' },
    { name: 'password', type: 'text', placeholder: 'Digite sua senha', label: 'Senha' },
    { name: 'Conpassword', type: 'text', placeholder: 'Confime a senha', label: 'Confirmar Senha'},
    { name: 'data', type: 'date', placeholder: 'Dia do nascimento', label: 'Data de Aniversario' }
  ];

  constructor(private router: Router) {}

  updateFormData(data: any) {
    this.formData = data;
    console.log('Dados atualizados:', this.formData);
  }

  onCadastro() {

    const { nome, email, password, Conpassword, data } = this.formData;

    if (!nome || !email || !password || !Conpassword || !data) {
      this.message = 'Preencher todos os campos obrigatórios!';
      return;
    }

    const usersJson = localStorage.getItem('users');
    const users = usersJson ? JSON.parse(usersJson) : [];

    if (password !== Conpassword) {
      this.message = 'As Senhas precisam ser iguais!'
      return;
    }


    if (users.find((u: { email: any; }) => u.email === email)) {
      this.message = 'Este e-mail já está cadastrado. Tente fazer login.';
      return;
    }

    

    users.push({ nome, email, password, data });
    localStorage.setItem('users', JSON.stringify(users));

    this.message = 'Cadastro realizado com sucesso! Redirecionando para o Login...';

    setTimeout(() => this.router.navigate(['/login']), 1500);
  }
}
