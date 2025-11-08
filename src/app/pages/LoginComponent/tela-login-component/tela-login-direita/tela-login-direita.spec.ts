import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaLoginDireita } from './tela-login-direita';

describe('TelaLoginDireita', () => {
  let component: TelaLoginDireita;
  let fixture: ComponentFixture<TelaLoginDireita>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaLoginDireita]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaLoginDireita);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
