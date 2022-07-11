import { IProduct } from './reducer';
import { PRODUCT_STORE } from './constants';

export function create(payload: IProduct) {
  return {
    type: PRODUCT_STORE.CREATE,
    payload,
  };
}

export function update(payload: IProduct) {
  return {
    type: PRODUCT_STORE.UPDATE,
    payload,
  };
}
