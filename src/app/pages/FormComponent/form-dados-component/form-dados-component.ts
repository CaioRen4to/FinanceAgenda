import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Forms } from "../../ComponentCompartilhado/forms/forms";
import { Button } from "../../ComponentCompartilhado/button/button";

@Component({
  selector: 'app-form-dados-component',
  imports: [FormsModule, CommonModule, Forms, Button],
  templateUrl: './form-dados-component.html',
  styleUrl: './form-dados-component.css'
})
export class FormDadosComponent {
[x: string]: any;

  message: string = '';
  formData: any = {};
  
  dadosFields = [ 
    {
      name: 'Salario',
      type: 'number',
      placeholder: 'Digite o seus proventos',
      label: 'Salario'
    },
    {
      name: 'Despesas',
      type: 'number',
      placeholder: 'Digite as suas depesas',
      label: 'Despesas'
    },
    {
      name: 'Data_comemorativa',
      type: 'date',
      placeholder: 'Digite uma data comemorartiva',
      label: 'Data Comemorativa'
    }
  ]

constructor(private router: Router) {}

  updateFormData(data: any) {
    this.formData = data;
    console.log('Dados atualizados:', this.formData);
  }


SalvarDados(){

  if (this.formData.Salario && this.formData.Despesas) {

    localStorage.setItem('formData', this.formData.Salario.toString());
    
    console.log('Dados salvos:', this.formData);
    this.message = 'Dados salvos com sucesso!';
  } else {
    this.message = 'Preencha os campos obrigatórios.';
  }   

  setTimeout(() => {
    this.router.navigate(['/home']);
  }, 1500);

 }
}
