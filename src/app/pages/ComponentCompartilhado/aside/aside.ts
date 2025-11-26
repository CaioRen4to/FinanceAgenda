import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ModalAdicionarDados } from '../../HomeComponent/modal-adicionar-dados/modal-adicionar-dados';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule, MatIconModule, ModalAdicionarDados],
  templateUrl: './aside.html',
  styleUrl: './aside.css'
})
export class Aside {
  mostrarModal: boolean = false;
  
  abrirModal(): void {
    this.mostrarModal = true;
  }

  fecharModal(): void {
    this.mostrarModal = false;
  }

  onDadosSalvos(): void {
    // Os componentes filhos (grafico, aside) devem ler do localStorage automaticamente
    // Se necessário, pode-se implementar um serviço para notificar atualizações
    // Por enquanto, os dados são salvos no localStorage e os componentes podem recarregar quando necessário
  }
}
