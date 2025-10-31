import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cadastro-component',
  imports: [FormsModule, CommonModule],
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

onCadatro() {
  if (!this.nome || !this.email || !this.password) {
    this.message = "Prencha todos os dados!"
    return
    }
    
    const user = {nome: this.nome, email: this.email, password: this.password, data: this.data};
    localStorage.setItem('user', JSON.stringify(user))

    this.message = "ACESSO CONCEDIDO!"
    setTimeout(() => this.router.navigate(['/login']), 1500);
  }
}