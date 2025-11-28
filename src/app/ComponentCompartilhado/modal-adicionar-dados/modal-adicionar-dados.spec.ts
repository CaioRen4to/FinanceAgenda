import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdicionarDados } from './modal-adicionar-dados';

describe('ModalAdicionarDados', () => {
  let component: ModalAdicionarDados;
  let fixture: ComponentFixture<ModalAdicionarDados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAdicionarDados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAdicionarDados);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

