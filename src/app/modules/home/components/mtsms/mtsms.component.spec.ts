import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtsmsComponent } from './mtsms.component';

describe('MtsmsComponent', () => {
  let component: MtsmsComponent;
  let fixture: ComponentFixture<MtsmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtsmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtsmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
