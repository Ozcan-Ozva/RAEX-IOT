import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TadigPdfUiComponent } from './tadig-pdf-ui.component';

describe('TadigPdfUiComponent', () => {
  let component: TadigPdfUiComponent;
  let fixture: ComponentFixture<TadigPdfUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TadigPdfUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TadigPdfUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
