import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cadastro-component',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './cadastro-component.html',
  styleUrl: './cadastro-component.css'
})
export class CadastroComponent {

  nome: String = ''
  email: String = ''
  password: String = ''
  data: String = ''

onCadatro() {



  }
}
