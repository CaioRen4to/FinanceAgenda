import { ModalAdicionarDados } from '../modal-adicionar-dados/modal-adicionar-dados';
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule, MatIconModule, ModalAdicionarDados],
  templateUrl: './aside.html',
  styleUrl: './aside.css'
})
export class Aside {

  @Output() dadosSalvos = new EventEmitter<void>();

  mostrarModal: boolean = false;

  abrirModal() {
    this.mostrarModal = true;
  }

  fecharModal() {
    this.mostrarModal = false;
  }

  onDadosSalvos() {
    this.dadosSalvos.emit();
    this.fecharModal();
  }
}
