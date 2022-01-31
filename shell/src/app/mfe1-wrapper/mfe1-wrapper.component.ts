import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { registry } from '../registry';
import { selectPortfolioWatchlist } from '../reducers';

@Component({
  selector: 'shell-mfe1-wrapper',
  templateUrl: './mfe1-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Mfe1WrapperComponent implements OnInit, OnDestroy {
  public isElementLoaded?: boolean;
  public watchList$?: Observable<string[]>;
  private readonly onDestroy$ = new Subject<void>();

  constructor(private route: ActivatedRoute, private store: Store, private cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.getWatchList();
    this.loadElement();
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  public loadElement(): void {
    const elementName = this.route.snapshot.data['elementName'];
    const importName = this.route.snapshot.data['importName'];

    const importFn = registry[importName];
    importFn()
      .then(() => {
        console.debug(`element ${elementName} loaded!`);
        this.isElementLoaded = true;
        this.cdr.detectChanges();
      })
      .catch((err: any) => console.error(`error loading ${elementName}:`, err));
  }

  private getWatchList(): void {
    this.watchList$ = this.store.select(selectPortfolioWatchlist).pipe(takeUntil(this.onDestroy$));
  }
}
