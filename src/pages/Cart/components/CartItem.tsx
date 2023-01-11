/* eslint-disable max-len */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/button-has-type */
/* eslint-disable import/order */
import { FC } from 'react';
import { CartProducts } from '../../../redux/cart/cart.types';
import useActions from '../../../redux/hooks/useActions';
import RemoveFromCartBtn from './RemoveFromCartBtn';
import '../cart.css';
import { useThemeHook } from '../../../ThemeContext/ThemeProvider';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/Language/store';
import { translate } from '../../../i18n';

// eslint-disable-next-line max-len
const CartItem: FC<CartProducts> = ({ product: { price, thumbnail, title }, quantity, id }) => {
  const { deleteCartItem } = useActions();
  const { addToCartProduct } = useActions();
  const [theme] = useThemeHook();
  const { language } = useSelector((state: RootState) => state.lang);
  // eslint-disable-next-line @typescript-eslint/no-redeclare

  const addToCartHandler = (productId: number) => {
    const cartProduct = {
      id: productId,
      quantity: 1,
      description: '',
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
    // Top Section
    <div className='col-md-12 col-lg-8 col'>
      {/* Cart items  Start */}
      <div className='product'>
        <div className='row'>
          <div className='col-md-3 pt-4'>
            <img
              src={thumbnail}
              alt={title}
              className='img-fluid'
            />
          </div>
          <div className='col-md-8'>
            <div className='info'>
              <div className='row'>
                <div className='col-md-5 product-name'>
                  <div className='product-name mt-12'>
                    <h5 className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'}`}>{title}</h5>
                  </div>
                </div>
                <div className='col-md-1 pt-12'>
                  <RemoveFromCartBtn id={id}>-</RemoveFromCartBtn>
                </div>
                <div className='col-md-2 quantity pt-6'>
                  <label className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'}`} htmlFor='quantity'>{translate('Quantity', language)}:</label>
                  <input
                    id='quantity'
                    type='number'
                    className='form-control w-12'
                    placeholder={quantity.toString()}
                  />
                </div>
                <div className='col-md-2 pt-6 '>
                  <button
                    data-product-id={id}
                    onClick={() => addToCartHandler(id)}
                    className='btn btn-danger ml-10% mt-6 mr-3'
                  >
                    +
                  </button>
                </div>
                <div className='col-md-1 pt-10'>
                  <button
                    className='btn btn-danger ml-10%'
                    onClick={() => deleteCartItem(id)}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
{
  /* <Container className='py-4 mt-5'>
        <Row className='justify-content-center'>
          <Table responsive='sm' striped bordered hover variant={theme ? 'dark' : 'light'} className='mb-5'>
            <tbody>
              <tr>
                <td>
                  <div style={{ background: 'red', height: '8rem', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ padding: '1rem' }}>
                      <img src={thumbnail} style={{ width: '10rem' }} alt={title} />
                    </div>
                  </div>
                </td>
                <td>
                  <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {title}
                  </h6>
                </td>
                <td className='pr-6'>{formatCurrency(price)}</td>
                <td className='pr-6'>Quantity ({quantity})</td>
                <td>
                  <RemoveFromCartBtn id={id}>-</RemoveFromCartBtn>
                  <Button data-product-id={id} onClick={() => addToCartHandler(id)} className='ms-2 pl-6'>+</Button>
                  <Button variant='danger' onClick={() => deleteCartItem(id)}>Remove Item</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container></> */
}
