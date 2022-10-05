import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaexTableComponent } from './raex-table.component';

describe('RaexTableComponent', () => {
  let component: RaexTableComponent;
  let fixture: ComponentFixture<RaexTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaexTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaexTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
