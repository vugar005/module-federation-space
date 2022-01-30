import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { randomStockPriceGenerator } from 'core/mocks/stock-price';
import { PollingService } from 'core/polling/polling.service';
import { combineLatest, defer, Observable, of } from 'rxjs';
import { STOCK_PRICE_TABLE_COL_DEFS } from './stock-price-table.constants';

@Component({
  selector: 'shell-stock-price-table',
  templateUrl: './stock-price-table.component.html',
  styleUrls: ['./stock-price-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockPriceTableComponent implements OnInit {
  public readonly columnDefs = STOCK_PRICE_TABLE_COL_DEFS;
  public stocks: string[] = ['SONY', 'MSFT', 'AAPL'];
  public dataSource = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ];

  constructor(
    private pollingService: PollingService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initGrid();
  }

  private initGrid(): void {
    this.initPollingStockData();
  }

  private initPollingStockData(): void {
    const requests: Observable<any>[] = [];
    this.stocks.forEach((symbol) =>
      requests.push(defer(() => of(randomStockPriceGenerator(symbol, 20))))
    );
    const combinedRequests = combineLatest(requests);

    this.pollingService.polling(combinedRequests, 1500).subscribe((data: any) => {
      this.dataSource = data;
      this.cdr.detectChanges();
    });
  }

}


