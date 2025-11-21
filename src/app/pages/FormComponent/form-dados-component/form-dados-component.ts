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

  // ATUALIZADO: Adicionados campos de texto para os nomes (legendas)
  dadosFields = [
    { 
      name: 'Nome_Salario', 
      type: 'text', 
      placeholder: 'Ex: Salário Mensal, Freela...', 
      label: 'Descrição da Renda' 
    },
    { 
      name: 'Salario', 
      type: 'number', 
      placeholder: 'Valor R$', 
      label: 'Valor da Renda' 
    },
    { 
      name: 'Nome_Despesa', 
      type: 'text', 
      placeholder: 'Ex: Aluguel, Mercado...', 
      label: 'Descrição da Despesa' 
    },
    { 
      name: 'Despesas', 
      type: 'number', 
      placeholder: 'Valor R$', 
      label: 'Valor da Despesa' 
    },
    { 
      name: 'Data_comemorativa', 
      type: 'date', 
      placeholder: 'Digite uma data', 
      label: 'Data Comemorativa'
    }
  ];

  constructor(private router: Router) {} 

  updateFormData(data: any): void {
    this.formData = data;
  }

SalvarDados(): void {
  // 1. Validação (mantivemos a mesma)
  if (!this.formData.Salario || !this.formData.Despesas || !this.formData.Nome_Salario || !this.formData.Nome_Despesa) {
    this.message = 'Preencha as descrições e os valores.';
    return;
  }

  try {
    // 2. Recuperar o que já existe no LocalStorage
    const dadosArmazenados = localStorage.getItem('dadosFinanceiros');
    
    // Se existir dados, converte de JSON para Objeto, senão cria um objeto vazio com arrays vazios
    let dadosAtuais = dadosArmazenados ? JSON.parse(dadosArmazenados) : { proventos: [], despesas: [] };

    // 3. Adicionar (Push) os novos itens nos arrays existentes
    // Nota: Se certifique que 'dadosAtuais.proventos' existe, senão inicializa
    if (!dadosAtuais.proventos) dadosAtuais.proventos = [];
    if (!dadosAtuais.despesas) dadosAtuais.despesas = [];

    dadosAtuais.proventos.push({
      nome: this.formData.Nome_Salario,
      valor: Number(this.formData.Salario)
    });

    dadosAtuais.despesas.push({
      nome: this.formData.Nome_Despesa,
      valor: Number(this.formData.Despesas)
    });

    // Adiciona a data (opcional: pode salvar uma lista de datas se quiser histórico, 
    // mas por enquanto vamos atualizar a data geral)
    dadosAtuais.data = this.formData.Data_comemorativa;

    // 4. Salvar o objeto atualizado de volta no LocalStorage
    localStorage.setItem('dadosFinanceiros', JSON.stringify(dadosAtuais));

    this.message = 'Dados adicionados com sucesso!';

    setTimeout(() => {
      this.router.navigate(['/home']); 
    }, 1000);

  } catch (error) {
    console.error(error);
    this.message = 'Erro ao salvar dados.';
   }
  }
}