import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MOCComponent } from './moc.component';

describe('MOCComponent', () => {
  let component: MOCComponent;
  let fixture: ComponentFixture<MOCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MOCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MOCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
