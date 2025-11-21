import { Component } from '@angular/core';
import { Perfil } from "./perfil/perfil";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cabecalho-component',
  imports: [Perfil, MatIconModule],
  templateUrl: './cabecalho-component.html',
  styleUrl: './cabecalho-component.css'
})
export class CabecalhoComponent {

}
