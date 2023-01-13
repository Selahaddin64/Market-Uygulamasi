/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable @typescript-eslint/naming-convention */
import React, { useEffect, useContext, useReducer } from 'react';
import reducer from './filter_reducer';
import {
  LOAD_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
  HANDLE_CLICK_FROM_SERVICES,
  RESET_IS_CLICK_FROM_SERVICES,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
} from './actions';
import { productDataType } from './filter.types';
import { useGetProductsQuery } from '../redux/products/product.api';

type filtersType = {
  minPrice: number
  maxPrice: number
  price: number
  minRating: number
  maxRating: number
  rating: number
};

export const defaultFilters: filtersType = {
  minPrice: 0,
  maxPrice: 0,
  price: 0,
  minRating: 0,
  maxRating: 0,
  rating: 0,
};

export type initialStateType = {
  filteredProducts: productDataType[]
  allData: productDataType[]
  gridView: boolean
  setGridView: () => void
  setListView: () => void
  sort: string
  updateSort: (e: React.ChangeEvent<HTMLSelectElement>) => void
  filters: filtersType
  updateFilters: (e: any) => void
  clearFilters: () => void
  isClickFromServices: boolean
  handleClickFromServices: () => void
  resetIsClickFromServices: () => void
};

const initialState: initialStateType = {
  filteredProducts: [],
  allData: [],
  gridView: true,
  setGridView: () => {},
  setListView: () => {},
  sort: 'price-lowest',
  updateSort: () => {},
  filters: defaultFilters,
  updateFilters: () => {},
  clearFilters: () => {},
  isClickFromServices: false,
  handleClickFromServices: () => {},
  resetIsClickFromServices: () => {},
};

const FilterContext = React.createContext<initialStateType>(initialState);
interface Props {
  children: React.ReactNode;
}
export const FilterProvider: React.FC<Props> = ({ children }) => {
  const { data } = useGetProductsQuery({
    limit: 40,
    skip: 2 * 10,
  });
  const allData = data?.products;

  const [state, dispatch] = useReducer(reducer, initialState);

  // to load the full list of product when app starts
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: allData });
  }, [allData]);

  // to sort and filter products when the sort value has changed
  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [allData, state.sort, state.filters]);

  const setGridView = () => {
    dispatch({ type: SET_GRID_VIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LIST_VIEW });
  };
  const updateSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: UPDATE_SORT, payload: e.target.value });
  };
  const updateFilters = (e: any) => {
    // need to figure out what to do with the event type here
    let { name } = e.target;
    let { value } = e.target;
    // only checkbox has e.target.checked prop, so only init checked variable here
    let checked;
    if (name === 'home-page-category') {
      name = 'category';
    }
    if (name === 'price') {
      value = Number(value);
    }
    if (name === 'rating') {
      value = Number(value);
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value, checked } });
  };
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  const handleClickFromServices = () => {
    dispatch({ type: HANDLE_CLICK_FROM_SERVICES });
  };

  const resetIsClickFromServices = () => {
    dispatch({ type: RESET_IS_CLICK_FROM_SERVICES });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
        handleClickFromServices,
        resetIsClickFromServices,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
