import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mfe1WrapperComponent } from './mfe1-wrapper.component';

describe('Mfe1WrapperComponent', () => {
  let component: Mfe1WrapperComponent;
  let fixture: ComponentFixture<Mfe1WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mfe1WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mfe1WrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
