import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargingPolicyComponent } from './charging-policy.component';

describe('ChargingPolicyComponent', () => {
  let component: ChargingPolicyComponent;
  let fixture: ComponentFixture<ChargingPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargingPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargingPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
