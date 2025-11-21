import { Component } from '@angular/core';
import { CabecalhoComponent } from '../cabecalho-component/cabecalho-component';
import { Grafico } from "../../ComponentCompartilhado/grafico/grafico";
import { CommonModule } from '@angular/common';
import { MenuLateralComponent } from '../menu-lateral-component/menu-lateral-component';
import { Aside } from "../../ComponentCompartilhado/aside/aside";


@Component({
  selector: 'app-tela-incial-component',
  standalone: true,
  imports: [CabecalhoComponent, CommonModule, Grafico, MenuLateralComponent, Aside],
  templateUrl: './tela-incial-component.html',
  styleUrl: './tela-incial-component.css'
})
export class TelaIncialComponent {

}
