import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { CabecalhoComponent } from '../cabecalho-component/cabecalho-component';

@Component({
  selector: 'app-tela-incial-component',
  imports: [RouterOutlet, CabecalhoComponent],
  templateUrl: './tela-incial-component.html',
  styleUrl: './tela-incial-component.css'
})
export class TelaIncialComponent {

}
