import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, VERSION } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeFromCart } from 'core/actions/cart.actions';
import { CartItem } from 'core/reducers/cart.reducer';
import { Subject, takeUntil } from 'rxjs';
import { AppState, selectCartItems } from '../reducers';

@Component({
  selector: 'shell-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  public readonly version = VERSION.full;
  public cartItems?: CartItem[];
  private readonly onDestroy$ = new Subject<void>();

  constructor(private store: Store<AppState>, private cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.getCartItems();
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  public onRemoveFromCart(item: CartItem): void {
    this.store.dispatch(removeFromCart({ payload: item }));
  }

  private getCartItems(): void {
    this.store
      .select(selectCartItems)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((items) => {
        this.cartItems = items;
        this.cdr.detectChanges();
      });
  }
}
