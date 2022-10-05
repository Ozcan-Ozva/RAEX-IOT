import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationBandsComponent } from './destination-bands.component';

describe('DestinationBandsComponent', () => {
  let component: DestinationBandsComponent;
  let fixture: ComponentFixture<DestinationBandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationBandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
