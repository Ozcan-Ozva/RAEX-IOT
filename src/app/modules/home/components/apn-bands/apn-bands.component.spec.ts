import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApnBandsComponent } from './apn-bands.component';

describe('ApnBandsComponent', () => {
  let component: ApnBandsComponent;
  let fixture: ComponentFixture<ApnBandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApnBandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApnBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
