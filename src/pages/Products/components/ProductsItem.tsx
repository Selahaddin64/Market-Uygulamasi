/* eslint-disable import/order */
import { FC } from 'react';
import { HeartIcon, ShoppingCartIcon, StarIcon } from '@heroicons/react/outline';
import { Product } from '../../../redux/products/product.types';
import '../products.module.scss';
import useActions from '../../../redux/hooks/useActions';
import { formatCurrency } from '../../../utilities/formatCurrency';
import { useDispatch } from 'react-redux';
import { addToFavorited } from '../../../redux/Favorites/favoritedSlice';
import { Card } from 'react-bootstrap';
import { useThemeHook } from '../../../ThemeContext/ThemeProvider';

// eslint-disable-next-line @typescript-eslint/no-shadow
const ProductItem: FC<Product> = ({ id, title, price, rating, thumbnail }) => {
  const { addToCartProduct } = useActions();
  const dispatch = useDispatch();
  const [theme] = useThemeHook();

  const addToFavHandler = (productId: number) => {
    const favProduct = {
      id: productId,
      product: {
        id: productId,
        title,
        price,
        thumbnail,
        rating,
      },
    };

    dispatch(addToFavorited(favProduct));
  };

  const addToCartHandler = (productId: number) => {
    const cartProduct = {
      id: productId,
      description: '',
      quantity: 1,
      product: {
        id: productId,
        title,
        price,
        thumbnail,
      },
    };

    addToCartProduct(cartProduct);
  };

  return (
    <Card
      style={{ width: '18rem', height: 'auto' }}
      className={`${theme ? 'bg-light-black text-light' : 'bg-lihgt text-black'} text-center p-0 overflow-hidden shadow mx-auto mb-4`}
    >
      <div className='product-pic'>
        <div style={{ width: '19rem' }}>
          <Card.Img variant='top' src={thumbnail} className='img-fluid' />
        </div>
      </div>
      <Card.Body>
        <Card.Title style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
          <h4 className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'}`}>{title}</h4>
        </Card.Title>
        <hr />
        <Card.Title>
          <span className='text-blue-600 font-bold h4'>{formatCurrency(price)}</span>
        </Card.Title>
        <Card.Title className='product-rating'>
          <StarIcon fill='currentColor' className='h-6 w-6 text-yellow-300' />
          <h4 className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} font-bold`}>{rating}</h4>
        </Card.Title>
        <div className='product-info'>
          <div className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} flex h-6 w-6 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 md:h-[30px] md:w-[30px]`}>
            <ShoppingCartIcon className='h-6 w-6 text-white' data-product-id={id} onClick={() => addToCartHandler(id)} />
          </div>
          <div className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} flex h-6 w-6 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 md:h-[30px] md:w-[30px]`}>
            <HeartIcon className='h-6 w-6 text-white' data-product-id={id} onClick={() => addToFavHandler(id)} />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
