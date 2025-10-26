import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoPadroComponent } from './botao-padro-component';

describe('BotaoPadroComponent', () => {
  let component: BotaoPadroComponent;
  let fixture: ComponentFixture<BotaoPadroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoPadroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoPadroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
