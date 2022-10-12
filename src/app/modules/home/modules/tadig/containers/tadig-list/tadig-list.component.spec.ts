import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TadigListComponent } from './tadig-list.component';

describe('TadigListComponent', () => {
  let component: TadigListComponent;
  let fixture: ComponentFixture<TadigListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TadigListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TadigListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
