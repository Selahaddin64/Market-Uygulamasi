/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import useActions from '../../../redux/hooks/useActions';
import { useProductByIdSelector } from '../../../redux/products/product.slice';

interface IAddToCartBtnProps {
  id: number;
  children?: React.ReactNode;
}

const AddToCartBtn: FC<IAddToCartBtnProps> = ({ id, children }) => {
  const { addToCartProduct } = useActions();

  const product: any = useProductByIdSelector(id);
  const { title, price, thumbnail, rating } = product || {};
  console.log('title', title);
  const addToCartHandler = (productId: number) => {
    const cartProduct = {
      id: productId,
      quantity: 1,
      product: {
        id: productId,
        title,
        price,
        thumbnail,
        rating,
      },
    };

    addToCartProduct(cartProduct);
  };

  return (
    <button
      className='btn btn-danger ml-10% mt-6 mr-3'
      type='button'
      data-product-id={id}
      onClick={() => addToCartHandler(id)}
    >
      {children}
    </button>
  );
};

export default AddToCartBtn;
