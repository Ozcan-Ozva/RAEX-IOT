import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosmsComponent } from './mosms.component';

describe('MosmsComponent', () => {
  let component: MosmsComponent;
  let fixture: ComponentFixture<MosmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MosmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MosmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
