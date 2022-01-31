import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, defer, Observable, of } from 'rxjs';
import { PollingService } from '../core/services/polling/polling.service';
import { randomStockPriceGenerator } from '../mocks/stock-prices';
import { selectUIWatchlist } from '../reducers';
import { WATCHLIST_COL_DEFS } from './watchlist.constants';

@Component({
  selector: 'mfe1-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WatchlistComponent implements OnInit {
  public readonly columnDefs = WATCHLIST_COL_DEFS;
  public dataSource = [];
  public watchlist?: string[];

  constructor(
    private pollingService: PollingService,
    private store: Store,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initGrid();
  }

  private initGrid(): void {
    this.initPollingStockData();
  }

  private getWatchlist(): Observable<string[]> {
    return this.store.select(selectUIWatchlist);
  }

  private initPollingStockData(): void {
    this.getWatchlist().subscribe((watchlist: string[]) => {
      this.watchlist = watchlist;
      this.cdr.detectChanges();
      console.log(watchlist);

      const requests: Observable<any>[] = [];
      watchlist.forEach((symbol) =>
        requests.push(defer(() => of(randomStockPriceGenerator(symbol, 20))))
      );
      const combinedRequests = combineLatest(requests);

      this.pollingService.polling(combinedRequests, 1500).subscribe((data) => {
        this.dataSource = data as any;
        this.cdr.detectChanges();
      });
    });
  }
}
