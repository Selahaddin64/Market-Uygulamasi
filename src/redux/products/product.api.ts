import { baseApi } from '../index.api';
import { Product, GetProductsProps, GetProductsResponse } from './product.types';

const productApi = baseApi
  // .enhanceEndpoints({
  //     addTagTypes: ['Product'],
  // })
  .injectEndpoints({
    endpoints: build => ({
      getProducts: build.query<GetProductsResponse, GetProductsProps>({
        query: ({ limit, skip }) => `/products?limit=${limit}&skip=${skip}`,
      }),
      getProduct: build.query<Product, { id: string }>({
        query: ({ id }) => `/products/${id}`,
      }),
      searchProducts: build.query<GetProductsResponse, { query: string }>({
        query: ({ query }) => `/products/search?q=${query}`,
      }),
    }),
  });

export const {
  useGetProductsQuery,
  useSearchProductsQuery,
  useLazySearchProductsQuery,
} = productApi;
