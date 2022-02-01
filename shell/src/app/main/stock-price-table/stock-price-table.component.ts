import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { PortfolioActions } from 'core/actions';
import { randomStockPriceGenerator } from 'core/mocks/stock-price';
import { PollingService } from 'core/polling/polling.service';
import { combineLatest, defer, Observable, of, Subject, takeUntil } from 'rxjs';
import { STOCK_PRICE_TABLE_COL_DEFS } from './stock-price-table.constants';
import { selectPortfolioWatchlist } from '../../reducers';

@Component({
  selector: 'shell-stock-price-table',
  templateUrl: './stock-price-table.component.html',
  styleUrls: ['./stock-price-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockPriceTableComponent implements OnInit, OnDestroy {
  public readonly columnDefs = STOCK_PRICE_TABLE_COL_DEFS;
  public stocks: string[] = ['SONY', 'MSFT', 'AAPL'];
  public dataSource = [];
  public watchlist?: string[];
  public readonly onDestroy$ = new Subject<void>();

  constructor(private pollingService: PollingService, private store: Store, private cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.initGrid();
    this.initWatchlist();
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  public onAddToWatchlist(symbol: string): void {
    this.store.dispatch(PortfolioActions.addToWatchList({ payload: symbol }));
  }

  public removeFromWatchlist(symbol: string): void {
    this.store.dispatch(PortfolioActions.removeFromWatchlist({ payload: symbol }));
  }

  private initGrid(): void {
    this.initPollingStockData();
  }

  private initPollingStockData(): void {
    const requests: Observable<any>[] = [];
    this.stocks.forEach((symbol) => requests.push(defer(() => of(randomStockPriceGenerator(symbol, 20)))));
    const combinedRequests = combineLatest(requests);

    this.pollingService.polling(combinedRequests, 1500).subscribe((data: any) => {
      this.dataSource = data;
      this.cdr.detectChanges();
    });
  }

  private initWatchlist(): void {
    this.store
      .select(selectPortfolioWatchlist)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((data: string[]) => {
        this.watchlist = data;
        this.cdr.detectChanges();
      });
  }
}
