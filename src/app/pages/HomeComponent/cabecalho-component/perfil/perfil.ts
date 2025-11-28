import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil implements OnInit {

  inicial: string = '';

  ngOnInit(): void {

    const userLogado = localStorage.getItem('userLogado');

    if (userLogado) {
      const user = JSON.parse(userLogado);
      this.inicial = user.nome.charAt(0).toUpperCase();
    }
  }
}

