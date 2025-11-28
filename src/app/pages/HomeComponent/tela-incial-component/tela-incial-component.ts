import { Component, ViewChild, OnInit } from '@angular/core';
import { CabecalhoComponent } from '../cabecalho-component/cabecalho-component';
import { Grafico } from '../../../ComponentCompartilhado/grafico/grafico';
import { CommonModule } from '@angular/common';
import { Aside } from '../../../ComponentCompartilhado/aside/aside';
import { MatIconModule } from '@angular/material/icon';
import { UserCardComponent } from "../user-card-component/user-card-component";
import { Perfil } from '../cabecalho-component/perfil/perfil';

@Component({
  selector: 'app-tela-incial-component',
  standalone: true,
  imports: [CabecalhoComponent, CommonModule, Grafico, Aside, UserCardComponent, MatIconModule, Perfil],
  templateUrl: './tela-incial-component.html',
  styleUrl: './tela-incial-component.css'
})
export class TelaIncialComponent {

   nomeCliente: string = '';

  @ViewChild('grafico') grafico!: Grafico;

  atualizarGrafico() {
    this.grafico.ngAfterViewInit();
  }

  ngOnInit(){
    const userLogado = localStorage.getItem('userLogado');

    if (userLogado) {
      const user = JSON.parse(userLogado);
      this.nomeCliente = user.nome;
    }

  }
}
