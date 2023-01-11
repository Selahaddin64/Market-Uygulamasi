/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './index.api';
import productReducer from './products/product.slice';
import cartReducer from './cart/cart.slice';
import favoritedReducer from './Favorites/favoritedSlice';
import langReducer from './Language/langSlice';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    product: productReducer,
    cart: cartReducer,
    favorited: favoritedReducer,
    lang: langReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware), // need for cache
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
