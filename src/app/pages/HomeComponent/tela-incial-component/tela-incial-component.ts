import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { CabecalhoComponent } from '../cabecalho-component/cabecalho-component';
import { Grafico } from "../../ComponentCompartilhado/grafico/grafico";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tela-incial-component',
  standalone: true,
  imports: [CabecalhoComponent, CommonModule, Grafico],
  templateUrl: './tela-incial-component.html',
  styleUrl: './tela-incial-component.css'
})
export class TelaIncialComponent {

}
