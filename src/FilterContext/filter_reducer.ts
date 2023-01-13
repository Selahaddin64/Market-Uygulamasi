/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */
import {
  LOAD_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  FILTER_PRODUCTS,
  HANDLE_CLICK_FROM_SERVICES,
  RESET_IS_CLICK_FROM_SERVICES,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  CLEAR_FILTERS,
} from './actions';
import { initialStateType } from './filter_context';
import { productDataType } from './filter.types';

const filter_reducer = (
  state: initialStateType,
  action: { type: any; payload?: any },
) => {
  if (action.type === LOAD_PRODUCTS) {
    const maxPrice = Math.max(
      (action.payload)?.map((item: productDataType) => item.price),
    );
    const maxRating = Math.max(
      (action.payload)?.map((item: productDataType) => item.rating),
    );

    return {
      ...state,
      data: [action.payload],
      filteredProducts: [action.payload],
      filters: { ...state.filters, maxPrice, price: maxPrice, maxRating, rating: maxRating },
    };
  }
  if (action.type === SET_GRID_VIEW) {
    return { ...state, gridView: true };
  }
  if (action.type === SET_LIST_VIEW) {
    return { ...state, gridView: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    let tempProducts = [...state.filteredProducts];
    if (state.sort === 'price-lowest') {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (state.sort === 'price-highest') {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (state.sort === 'rating-lowest') {
      tempProducts = tempProducts.sort((a, b) => a.rating - b.rating);
    }
    if (state.sort === 'rating-highest') {
      tempProducts = tempProducts.sort((a, b) => b.rating - a.rating);
    }
    return { ...state, filteredProducts: tempProducts };
  }
  if (action.type === FILTER_PRODUCTS) {
    const { allData } = state;
    const {
      rating,
      price,
    } = state.filters;

    let tempProducts = [...allData];
    // rating
    if (rating) {
      tempProducts = tempProducts.filter(product => product.rating <= rating);
    }
    // price
    if (price) {
      tempProducts = tempProducts.filter(product => product.price <= price);
    }
    return { ...state, filteredProducts: tempProducts };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        price: state.filters.maxPrice,
        rating: state.filters.maxRating,
      },
    };
  }
  if (action.type === HANDLE_CLICK_FROM_SERVICES) {
    return { ...state, isClickFromServices: true };
  }
  if (action.type === RESET_IS_CLICK_FROM_SERVICES) {
    return { ...state, isClickFromServices: false };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
