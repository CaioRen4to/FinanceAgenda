import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from "../../ComponentCompartilhado/button/button";
import { Forms } from "../../ComponentCompartilhado/forms/forms";


@Component({
  selector: 'app-cadastro-component',
  imports: [FormsModule, CommonModule, Button, Forms],
  templateUrl: './cadastro-component.html',
  styleUrl: './cadastro-component.css'
})


export class CadastroComponent {

  message: string = '';
  formData: any = {};

  cadastroFields = [
    {
        name: 'nome',
        type: 'text',
        placeholder: 'Digite seu nome',
        label: 'Nome'
    },
    {
        name: 'email',
        type: 'text',
        placeholder: 'Digite seu e-mail',
        label: 'E-mail'
    },
    {
        name: 'password',
        type: 'text',
        placeholder: 'Digite sua senha',
        label: 'Senha'
    },
    {
        name: 'data',
        type: 'dat',
        placeholder: 'Dia do nascimento',
        label: 'Data de Aniversario'
    }
  ];

constructor(private router: Router) {}

  updateFormData(data: any) {
    this.formData = data;
    console.log('Dados atualizados:', this.formData);
  }

onCadastro() {
    if (!this.formData.nome || !this.formData.email || !this.formData.password || !this.formData.data) {
        this.message = "Preencher todos os campos obrigatórios!";
        return;
    }

    const newUser = {
        nome: this.formData.nome,
        email: this.formData.email,
        password: this.formData.password,
        data: this.formData.data
    };

    // Recuperar usuários existentes (ou iniciar um array vazio)
    const usersJson = localStorage.getItem('users');
    let users: any[] = usersJson ? JSON.parse(usersJson) : [];
    
    // Verificar se o e-mail já está cadastrado
    const existingUser = users.find(u => u.email === this.formData.email);
    if (existingUser) {
        this.message = "Este e-mail já está cadastrado. Tente fazer login.";
        return;
    }
    // Adicionar o novo usuário e salvar o array atualizado
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    this.message = "Cadastro realizado com sucesso! Redirecionando para o Login...";
    
    // Redirecionar para a página de login
    setTimeout(() => {
        this.router.navigate(['/login']); 
    }, 1500);
 }
}