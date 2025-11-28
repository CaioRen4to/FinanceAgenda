import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from '../../../ComponentCompartilhado/button/button';
import { Forms } from '../../../ComponentCompartilhado/forms/forms';


export type CampoCadastro = {
  name: string,
  type: string | number,
  placeholder: string,
  label: string,
}[]

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
    { name: 'nome', type: 'text', placeholder: 'Digite seu nome', label: 'Usuário' },
    { name: 'email', type: 'email', placeholder: 'Digite seu e-mail', label: 'E-mail' },
    { name: 'password', type: 'password', placeholder: 'Digite sua senha', label: 'Senha' },
    { name: 'conpassword', type: 'password', placeholder: 'Confime a senha', label: 'Confirmar Senha'},
    { name: 'data', type: 'date', placeholder: 'Dia do nascimento', label: 'Data de Aniversario' }
  ];

  constructor(private router: Router) {}

  // Atualizar os dados
  updateFormData(dados: CampoCadastro) {
    this.formData = dados;
    console.log('Dados atualizados:');
  }

  onCadastro() {

    const { nome, email, password, conpassword, data } = this.formData;

    if (!nome || !email || !password || !conpassword || !data) {
      this.message = 'Preencher todos os campos obrigatórios!';
      return;
    }

    // Criar uma Array
    const usersJson = localStorage.getItem('users');
    const users = usersJson ? JSON.parse(usersJson) : [];

    if (password !== conpassword) {
      this.message = 'As Senhas precisam ser iguais!'
      return;
    }

    // Verifica se já tem um e-mail cadastro no LocalStorage
    if (users.find((u: { email: any; }) => u.email == email)) {
      this.message = 'Este e-mail já está cadastrado. Tente fazer login.';
      return;
    }

    
    // Cadastrar Novo Usuario
    users.push({ nome, email, password, data });
    localStorage.setItem('users', JSON.stringify(users));

    this.message = 'Cadastro realizado com sucesso! Redirecionando para o Login...';

    setTimeout(() => this.router.navigate(['/login']), 1500);
  }
}
