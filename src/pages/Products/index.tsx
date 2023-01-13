/* eslint-disable max-len */
/* eslint-disable import/order */
import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { useLazySearchProductsQuery } from '../../redux/products/product.api';
import ProductsList from './components/ProductsList';
import SearchForm from './components/SearchForm';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Pagination from '../../components/Pagination';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/Language/store';
import { translate } from '../../i18n';
import Sort from '../../components/Sort/Sort';
import { useFilterContext } from '../../FilterContext/filter_context';
import { useThemeHook } from '../../ThemeContext/ThemeProvider';

const ProductsPage = () => {
  const [query, setQuery] = useState('');
  const [activePage, setActivePage] = useState(1);

  const [theme] = useThemeHook();

  const [debouncedQuery] = useDebounce(query, 500);
  const [searchProducts, { data, error, isLoading }] = useLazySearchProductsQuery();
  const [active, setActive] = useState(data?.products);
  const { language } = useSelector((state: RootState) => state.lang);

  const { clearFilters, isClickFromServices, resetIsClickFromServices } =
    useFilterContext();

  useEffect(() => {
    if (isClickFromServices) {
      // if this page mounts because clicking a button in Services, should not run clearFilters()
    // no set time out is needed to reset the variable
      resetIsClickFromServices();
    } else {
      // when component mounts clear the filter
      clearFilters();
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (debouncedQuery.length) {
      searchProducts({ query: debouncedQuery });
    }
  }, [debouncedQuery, searchProducts]);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  const lowestPrice = data?.products.slice().sort((a, b) => a.price - b.price);
  const handlerLowestPrice = () => {
    setActive(lowestPrice);
  };
  const highestPrice = data?.products.slice().sort((a, b) => b.price - a.price);
  const handlerHighestPrice = () => {
    setActive(highestPrice);
  };
  const lowestRating = data?.products.slice().sort((a, b) => a.rating - b.rating);
  const handlerLowestRating = () => {
    setActive(lowestRating);
  };
  const highestRating = data?.products.slice().sort((a, b) => b.rating - a.rating);
  const handlerHighestRating = () => {
    setActive(highestRating);
  };

  return (
    <>
      <h1 className={`${theme ? 'text-light my-5' : 'text-black my-5'} pt-16 text-center`}>{translate('Products', language)}</h1>
      <SearchForm query={query} setQuery={setQuery} />
      {data && query.length ? (
        <div>
          <Sort lowestPrice={handlerLowestPrice} highestPrice={handlerHighestPrice} lowestRating={handlerLowestRating} highestRating={handlerHighestRating} />
          <ProductsList products={active} />
          <Pagination
            activePage={activePage}
            setActivePage={setActivePage}
            total={data?.total}
            limit={data?.limit}
          />
        </div>
      ) : (
        <p className={theme ? 'text-light my-5' : 'text-black my-5'}>{translate('No products found', language)}</p>
      )}
    </>
  );
};

export default ProductsPage;
