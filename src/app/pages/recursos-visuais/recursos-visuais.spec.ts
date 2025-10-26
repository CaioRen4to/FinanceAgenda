import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosVisuais } from './recursos-visuais';

describe('RecursosVisuais', () => {
  let component: RecursosVisuais;
  let fixture: ComponentFixture<RecursosVisuais>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecursosVisuais]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecursosVisuais);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
