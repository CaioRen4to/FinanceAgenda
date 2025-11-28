import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css'
})
export class Forms {
  
  @Input() fields: { name: string, type: string, placeholder: string, label: string }[] = [];

  // Aqui é onde os dados capturados saem do componente Forms 
  @Output() dataChange = new EventEmitter<any>();

  formData: any = {}; // Usado no modal-adicionar.ts

  // Separa cada campo e "Organiza" os inputs
  ngOnChanges() {
    this.fields.forEach(field => {
      this.formData[field.name] = '';
    });
  }

  // Enviar os dados dos campos atualizados pro componente pai
  onFieldChange() {
    this.dataChange.emit(this.formData);
  }
}