/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
import { FC } from 'react';
import { Product } from '../../../redux/products/product.types';
import ProductItem from './ProductsItem';
import '../products.module.scss';

interface ProductsListProps {
  products: Product[] | undefined;
}
const ProductsList: FC<ProductsListProps> = ({ products }) => (
  <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
    {products?.map(product => (
      <ProductItem key={product.id} {...product} />
    ))}
  </div>
);

export default ProductsList;
