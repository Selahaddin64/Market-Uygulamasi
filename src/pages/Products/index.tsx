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

const ProductsPage = () => {
  const [query, setQuery] = useState('');
  const [activePage, setActivePage] = useState(1);

  const [debouncedQuery] = useDebounce(query, 500);
  const [searchProducts, { data, error, isLoading }] = useLazySearchProductsQuery();

  const { language } = useSelector((state: RootState) => state.lang);

  useEffect(() => {
    if (debouncedQuery.length) {
      searchProducts({ query: debouncedQuery });
    }
  }, [debouncedQuery, searchProducts]);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <h1>{translate('Products', language)}</h1>
      <h1>{translate('Search Products', language)}</h1>
      <SearchForm query={query} setQuery={setQuery} />

      {data ? (
        <>
          <ProductsList products={data?.products} />
          <Pagination
            activePage={activePage}
            setActivePage={setActivePage}
            total={data?.total}
            limit={data?.limit}
          />
        </>
      ) : (
        <p>{translate('No products found', language)}</p>
      )}
    </>
  );
};

export default ProductsPage;
