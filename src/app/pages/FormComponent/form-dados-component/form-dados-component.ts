import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-dados-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './form-dados-component.html',
  styleUrl: './form-dados-component.css'
})
export class FormDadosComponent {

  salario: number | null = null; 
  despesas: number | null = null;
  
SalvaDados(){
  if(this.salario !== null && this.despesas !== null) { 

    localStorage.setItem('userSalario', this.salario.toString());
    
    }
}
}
