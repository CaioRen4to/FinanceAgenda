import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TelaIncialComponent } from '../../HomeComponent/tela-incial-component/tela-incial-component';

@Component({
  selector: 'app-tela-login-component',
  standalone: true,
  imports: [FormsModule, CommonModule, TelaIncialComponent],
  templateUrl: './tela-login-component.html',
  styleUrl: './tela-login-component.css'
})

export class TelaLoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.username === 'admin@gmail.com' && this.password === '1234') {

      this.router.navigate(["/home"]); // FALTA CRIAR O MEU PRA FAZER O CAMINHO DO LOGIM
    } else {
      this.errorMessage = 'Usuário ou senha incorretos. Tente novamente.';
    } 
  }

VaiProCadastro(){
  this.router.navigate(["/cadastro"])
}

}
