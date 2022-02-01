import { createReducer, on } from '@ngrx/store';
import { CartActions } from 'core/actions';

export const featureKey = 'cart';

export interface CardState {
    items: CartItem[];
}

export interface CartItem {
  symbol: string;
  count: number;
}

const initialState: CardState = {
  items: [],
};

export const reducer = createReducer(
  initialState,
  // Even though the `state` is unused, it helps infer the return type
  on(CartActions.addToCart, (state, action) => {
    const items = [...state.items];
    let item = Object.assign({}, items.find(el => el.symbol === action.payload));
    if (item?.count) {
      item.count = item.count + 1;
      const indexOfItem = items.findIndex(el => el.symbol === item.symbol);
      items.splice(indexOfItem, 1, item);
    } else {
      item = {symbol: action.payload, count: 1}
      items.push(item);
    }

    return ({
      ...state,
      items
  })
  }),
  on(CartActions.removeFromCart, (state, action) => ({
    ...state,
    items: state.items.filter(item => item.symbol !== action.payload?.symbol)
})),
);

export const selectCartItems = (state: CardState) => state.items;