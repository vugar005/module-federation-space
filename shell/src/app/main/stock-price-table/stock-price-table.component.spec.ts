import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPriceTableComponent } from './stock-price-table.component';

describe('StockPriceTableComponent', () => {
  let component: StockPriceTableComponent;
  let fixture: ComponentFixture<StockPriceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockPriceTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockPriceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
