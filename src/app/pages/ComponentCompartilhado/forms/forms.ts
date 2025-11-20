import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Aside } from '../../HomeComponent/aside/aside';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule, CommonModule, Aside],
  templateUrl: './forms.html',
  styleUrl: './forms.css'
})
export class Forms {
  @Input() title: string = '';
  @Input() fields: { name: string, type: string, placeholder: string, label: string }[] = [];

  @Output() dataChange = new EventEmitter<any>();

  formData: any = {};

  ngOnInit() {
    this.fields.forEach(field => {
      this.formData[field.name] = '';
    });
  }

  onFieldChange() {
    this.dataChange.emit(this.formData);
  }
}