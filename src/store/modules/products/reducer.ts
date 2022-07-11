import { IAction } from '../types';
import { PRODUCT_STORE } from './constants';

export interface IProduct {
  title: string;
  price: number;
  enable: boolean;
}

const initialState: IProduct[] = [];

const productsReducer = (
  state: IProduct[] = initialState,
  { type, payload }: IAction
) => {
  switch (type) {
    case PRODUCT_STORE.CREATE:
      return [...state, payload];

    default:
      return state;
  }
};

export default productsReducer;
