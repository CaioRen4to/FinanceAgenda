import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Forms } from "../../ComponentCompartilhado/forms/forms";
import { Button } from "../../ComponentCompartilhado/button/button";
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-dados',
  standalone: true,
  imports: [CommonModule, FormsModule, Forms, Button],
  templateUrl: './form-dados-component.html',
  styleUrl: './form-dados-component.css'
})
export class FormDadosComponent {
  message: string = '';
  formData: any = {};

  dadosFields = [
    { 
      name: 'Salario', 
      type: 'number', 
      placeholder: 'Digite o seus proventos', 
      label: 'Salário' 
    },
    { 
      name: 'Despesas', 
      type: 'number', 
      placeholder: 'Digite as suas despesas', 
      label: 'Despesas' 
    },
    { 
      name: 'Data_comemorativa', 
      type: 'date', 
      placeholder: 'Digite uma data comemorativa', 
      label: 'Data Comemorativa'
     }
  ];

  constructor(private router: Router) {} // ✅ injeção correta

  updateFormData(data: any): void {
    this.formData = data;
  }

SalvarDados(): void {
    if (!this.formData.Salario || !this.formData.Despesas || !this.formData.Data_comemorativa) {
      this.message = 'Preencha todos os campos obrigatórios.';
      return;
    }

    try {
      localStorage.removeItem('formData');

      // Cria um novo array só com o envio atual
      const dados = [{
        Salario: Number(this.formData.Salario),
        Despesas: Number(this.formData.Despesas),
        Data_comemorativa: this.formData.Data_comemorativa
      }];

      // Salva no localStorage
      localStorage.setItem('formData', JSON.stringify(dados));

      this.message = 'Dados salvos com sucesso!';

      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 1000);

    } catch {
      this.message = 'Erro ao salvar dados.';
    }
  }
}
