import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil implements OnInit {

  nomeCliente: string = '';
  inicial: string = '';

  ngOnInit(): void {
    const userLogado = localStorage.getItem('userLogado');

    if (userLogado) {
      const user = JSON.parse(userLogado);
      this.nomeCliente = user.nome;
      this.inicial = user.nome.charAt(0).toUpperCase();
    }
  }
}

