import { Component, ViewChild } from '@angular/core';
import { CabecalhoComponent } from '../cabecalho-component/cabecalho-component';
import { Grafico } from '../../../ComponentCompartilhado/grafico/grafico';
import { CommonModule } from '@angular/common';
import { Aside } from '../../../ComponentCompartilhado/aside/aside';
import { UserCardComponent } from "../user-card-component/user-card-component";


@Component({
  selector: 'app-tela-incial-component',
  standalone: true,
  imports: [CabecalhoComponent, CommonModule, Grafico, Aside, UserCardComponent],
  templateUrl: './tela-incial-component.html',
  styleUrl: './tela-incial-component.css'
})
export class TelaIncialComponent {

  @ViewChild('grafico') grafico!: Grafico;

  atualizarGrafico() {
    this.grafico.ngAfterViewInit();
  }


}
