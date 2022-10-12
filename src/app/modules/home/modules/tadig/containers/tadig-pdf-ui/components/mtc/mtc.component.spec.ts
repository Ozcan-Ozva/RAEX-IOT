import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtcComponent } from './mtc.component';

describe('MtcComponent', () => {
  let component: MtcComponent;
  let fixture: ComponentFixture<MtcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
