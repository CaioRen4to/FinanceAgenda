import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './grafico.html',
  styleUrl: './grafico.css'
})
export class Grafico {

}
