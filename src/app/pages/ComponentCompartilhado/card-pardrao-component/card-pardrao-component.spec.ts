import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPardraoComponent } from './card-pardrao-component';

describe('CardPardraoComponent', () => {
  let component: CardPardraoComponent;
  let fixture: ComponentFixture<CardPardraoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPardraoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPardraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
