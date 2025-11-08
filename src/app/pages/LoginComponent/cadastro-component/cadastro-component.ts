import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from "../../ComponentCompartilhado/button/button";


@Component({
  selector: 'app-cadastro-component',
  imports: [FormsModule, CommonModule, Button],
  templateUrl: './cadastro-component.html',
  styleUrl: './cadastro-component.css'
})


export class CadastroComponent {
  
  constructor(private router: Router) {}

  nome: String = ''
  email: String = ''
  password: String = ''
  data: String = ''
  message: String = ''

onCadastro() {
    if (!this.nome || !this.email || !this.password || !this.data) {
        this.message = "Preencher todos os campos obrigatórios!";
        return;
    }

    const newUser = {
        nome: this.nome,
        email: this.email,
        password: this.password,
        data: this.data
    };

    // Recuperar usuários existentes (ou iniciar um array vazio)
    const usersJson = localStorage.getItem('users');
    let users: any[] = usersJson ? JSON.parse(usersJson) : [];
    
    // Verificar se o e-mail já está cadastrado
    const existingUser = users.find(u => u.email === this.email);
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