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
  @Input() title: string = '';
  @Input() fields: { name: string, type: string, placeholder: string, label: string }[] = [];

  @Output() dataChange = new EventEmitter<any>();

  formData: any = {};

  ngOnInit() {
    // Inicializa formData com os campos vazios
    this.fields.forEach(field => {
      this.formData[field.name] = '';
    });
  }

  // Emite os dados sempre que houver mudança
  onFieldChange() {
    this.dataChange.emit(this.formData);
  }
}