import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeBandsComponent } from './time-bands.component';

describe('TimeBandsComponent', () => {
  let component: TimeBandsComponent;
  let fixture: ComponentFixture<TimeBandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeBandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
