import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ModalAdicionarDados } from '../../pages/HomeComponent/modal-adicionar-dados/modal-adicionar-dados';
import { Grafico } from '../grafico/grafico';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule, MatIconModule, ModalAdicionarDados],
  templateUrl: './aside.html',
  styleUrl: './aside.css'
})
export class Aside {


  carregarDadosDaHome() {
  const dadosSalvos = localStorage.getItem('dadosFinanceiros');
}

  mostrarModal: boolean = false;
  
  abrirModal(): void {
    this.mostrarModal = true;
  }

  fecharModal(): void {
    this.mostrarModal = false;
  }


  onDadosSalvos() {
  this.dadosSalvos.emit();  // avisa a home
  this.fecharModal();
}


  @Output() dadosSalvos = new EventEmitter<void>();
  
}
