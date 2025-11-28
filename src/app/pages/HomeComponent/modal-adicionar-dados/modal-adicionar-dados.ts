import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Forms } from '../../../ComponentCompartilhado/forms/forms';
import { Button } from '../../../ComponentCompartilhado/button/button';

export type CampoFormulario = {                                                                                                       //define o formato                                                                                                                          
  name: string, 
  type: 'text' | 'number' | 'date' | 'email',
  placeholder: string, 
  label: string 
}

@Component({
  selector: 'app-modal-adicionar-dados',
  standalone: true,
  imports: [CommonModule, FormsModule, Forms, Button],
  templateUrl: './modal-adicionar-dados.html',
  styleUrl: './modal-adicionar-dados.css'
})
export class ModalAdicionarDados {
  @Output() closeModal = new EventEmitter<void>(); //informa o fechamento do modal
  @Output() dadosSalvos = new EventEmitter<void>(); //informa que os dados foram salvos
  
  message: string = ''; 
  formData: any = {}; //guarda todas as informações que o usuario digita no form

  dadosFields = [ //arrays de campos
    { 
      name: 'Nome_Salario', 
      type: 'text', 
      placeholder: 'Ex: Salário Mensal, Freela...', 
      label: 'Descrição da Renda' 
    },
    //Os dois primeiros representam a renda
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
    //Representam as despesas
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
    //Representa uma data comemorativa
  ];

  //atualiza os dados dentro do form
  updateFormData(data: CampoFormulario): void {
    this.formData = data;
  }

  SalvarDados(): void {
    // 1. Validação
    if (!this.formData.Salario || !this.formData.Despesas || !this.formData.Nome_Salario || !this.formData.Nome_Despesa) {
      this.message = 'Preencha as descrições e os valores.';
      return;
    }

    try {                                                                                                                                                                      //O try é pique você dizer, vou tentar se der errado, te aviso.
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

      // Emitir evento para atualizar a tela e fechar o modal
      this.dadosSalvos.emit();
      this.fecharModal();
     
      //Se o bloco try falhar, ou o local storage der mais que 5MB a mensagem aparece.
    } catch (error) {
      console.error(error); //remove o que tiver de errado no try
      this.message = 'Erro ao salvar dados.';
    }

    
  }

  fecharModal(): void {
    this.closeModal.emit();
    this.formData = {};
    this.message = '';
  }

  fecharModalClickOverlay(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) { //verifica se o elmento exato que foi cliacado
      this.fecharModal();
    }
  }
}