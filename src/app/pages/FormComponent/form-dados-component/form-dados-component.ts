import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Forms } from "../../ComponentCompartilhado/forms/forms";

@Component({
  selector: 'app-form-dados-component',
  imports: [FormsModule, CommonModule, Forms],
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
      type: 'Salario',
      placehoder: 'Digite o seus proventos',
      label: 'Salario'
    },
    {
      name: 'Despesas',
      type: 'Despesas',
      placehoder: 'Digite as suas depesas',
      label: 'Despesas'
    }
  ]

constructor(private router: Router) {}

  updateFormData(data: any) {
    this.formData = data;
    console.log('Dados atualizados:', this.formData);
  }


SalvaDados(){
  if(this.formData.Salario !== null && this.formData.Despesas !== null) { 

    localStorage.setItem('userSalario', this.formData.Salario.toString());
    
    }
}
}
