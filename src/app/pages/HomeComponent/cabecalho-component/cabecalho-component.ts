import { Component } from '@angular/core';
import { Perfil } from "./perfil/perfil";

@Component({
  selector: 'app-cabecalho-component',
  imports: [Perfil],
  templateUrl: './cabecalho-component.html',
  styleUrl: './cabecalho-component.css'
})
export class CabecalhoComponent {

}
