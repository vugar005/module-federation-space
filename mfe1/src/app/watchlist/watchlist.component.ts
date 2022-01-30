import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { combineLatest, defer, Observable, of } from 'rxjs';
import { PollingService } from '../core/services/polling/polling.service';
import { randomStockPriceGenerator } from '../mocks/stock-prices';
import { WATCHLIST_COL_DEFS } from './watchlist.constants';

@Component({
  selector: 'mfe1-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WatchlistComponent implements OnInit {
  public readonly columnDefs = WATCHLIST_COL_DEFS;
  public watchList: string[] = ['SONY', 'MSFT'];
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
    this.watchList.forEach((symbol) =>
      requests.push(defer(() => of(randomStockPriceGenerator(symbol, 20))))
    );
    const combinedRequests = combineLatest(requests);

    this.pollingService.polling(combinedRequests, 1500).subscribe((data) => {
      this.dataSource = data;
      this.cdr.detectChanges();
    });
  }
}
