import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaLoginEsquerda } from './tela-login-esquerda';

describe('TelaLoginEsquerda', () => {
  let component: TelaLoginEsquerda;
  let fixture: ComponentFixture<TelaLoginEsquerda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaLoginEsquerda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaLoginEsquerda);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
