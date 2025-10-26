import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaIncialComponent } from './tela-incial-component';

describe('TelaIncialComponent', () => {
  let component: TelaIncialComponent;
  let fixture: ComponentFixture<TelaIncialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaIncialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaIncialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
