import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  VERSION,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UIActions } from './core/actions';

@Component({
  selector: 'mfe1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, OnChanges {
  @Input() watchlist?: string[];
  public title = 'mfe1';
  public readonly version = VERSION.major;

  constructor(private router: Router, private store: Store) {}

  public ngOnInit(): void {
    this.connectRouter();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    const watchlistChange = changes && changes['watchlist'];
    console.log('watchlist', watchlistChange?.currentValue);
    if (watchlistChange) {
      const watchlistData = watchlistChange.currentValue;
      const data = watchlistData ? watchlistData.split(',') : [];
      this.store.dispatch(UIActions.setUIWatchlist({ payload: data }));
    }
  }

  private connectRouter(): void {
    const url = `${location.pathname.substr(1)}${location.search}`;
    this.router.navigateByUrl(url);
    window.addEventListener('popstate', () => {
      this.router.navigateByUrl(url);
    });
  }
}
