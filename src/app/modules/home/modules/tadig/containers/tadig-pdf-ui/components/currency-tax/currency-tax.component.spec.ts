import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyTaxComponent } from './currency-tax.component';

describe('CurrencyTaxComponent', () => {
  let component: CurrencyTaxComponent;
  let fixture: ComponentFixture<CurrencyTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyTaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
