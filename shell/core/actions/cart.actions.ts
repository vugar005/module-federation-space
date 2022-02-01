import { createAction, props } from '@ngrx/store';
import { CartItem } from 'core/reducers/cart.reducer';

export const addToCart = createAction('[MAIN PAGE] Add to Cart', props<{ payload: string }>());
export const removeFromCart = createAction('[MAIN PAGE] Remove From Cart', props<{ payload: CartItem }>());
