/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { FavProducts } from './favorites.types';

export interface FavoritedState {
  items: FavProducts[];
}

const initialState: FavoritedState = {
  items: [],
};

export const favoritedSlice = createSlice({
  name: 'favorited',
  initialState,
  reducers: {
    addToFavorited: {
      reducer: (state: FavoritedState, action: PayloadAction<FavProducts>) => {
        state.items.find(product => product.id === action.payload.id);
        state.items.push(action.payload);
      },
      prepare: (product: FavProducts) => ({
        payload: product,
      }),
    },
    // addToFavorited: (state: FavoritedState, action: PayloadAction<CartProducts>) => {
    //   // eslint-disable-next-line no-param-reassign
    //   state.items = [...state.items, action.payload];
    // },
    removeFromFavorited: (
      state: FavoritedState,
      action: PayloadAction<number>,
    ) => {
      const index = state.items.findIndex(
        (item: FavProducts) => item.id === action.payload,
      );

      const newFavorited = [...state.items];

      if (index >= 0) {
        newFavorited.splice(index, 1);
      } else {
        console.log(
          `Cant remove product (id: ${action.payload}) as its not in Favorited!`,
        );
      }

      // eslint-disable-next-line no-param-reassign
      state.items = newFavorited;
    },
    clearFavorites: (state: FavoritedState) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToFavorited, removeFromFavorited, clearFavorites } = favoritedSlice.actions;

// Selectors -> retrieving items in state to use in different components
export const selectFavotitedItems = (state: RootState) => state.favorited.items;
export const selectFavoritedItemsWithId = (state: RootState, id: number) => {
  state.favorited.items.filter((item: FavProducts) => item.id === id);
};
export default favoritedSlice.reducer;
export const useCartProductsSelector = () =>
  useTypedSelector((state: RootState) => state.favorited.items);
