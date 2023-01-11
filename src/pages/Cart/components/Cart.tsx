/* eslint-disable import/order */
/* eslint-disable no-lone-blocks */
/* eslint-disable max-len */
import { FC } from 'react';
import CartItem from './CartItem';
import { CartProducts } from '../../../redux/cart/cart.types';
import '../cart.css';
import { formatCurrency } from '../../../utilities/formatCurrency';
import { useThemeHook } from '../../../ThemeContext/ThemeProvider';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/Language/store';
import { translate } from '../../../i18n';

interface ICartProps {
  setIsSubmitOrder: (isSubmitOrder: boolean) => void;
  products: CartProducts[];
}

const Cart: FC<ICartProps> = ({ products, setIsSubmitOrder }) => {
  const [theme] = useThemeHook();
  const { language } = useSelector((state: RootState) => state.lang);

  if (!products.length) return <h3 className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} mt-32 flex justify-center`}>{translate('Cart is empty', language)}</h3>;

  return (
    <main className='page mt-32'>
      <section className={`${theme ? 'bg-light-black text-light' : 'bg-lihgt text-black'} shopping-cart dark`}>
        <div className='container'>
          <div className={`${theme ? 'bg-light-black text-light' : 'bg-lihgt text-black'} content`}>
            <div className='row'>
              {products.map(cartProduct => (
                <CartItem key={cartProduct.id} {...cartProduct} />
              ))}
              <div className='col-md-12 col-lg-4 '>
                <div className={`${theme ? 'bg-black text-dark-primary' : 'bg-light text-light-primary'} summary`}>
                  <h3 className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'}`}>{translate('Summary', language)}</h3>
                  <div className='summary-item'>
                    <span className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} text`}>{translate('Total Items', language)}:</span>
                    <span className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} price`}>{products.length}</span>
                  </div>
                  <div className='summary-item'>
                    <span className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} text`}>{translate('Discount', language)}</span>
                    <span className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} price`}>36% Off</span>
                  </div>
                  <div className='summary-item'>
                    <span className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} text`}>{translate('Shipping', language)}</span>
                    <span className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} price`}>{translate('Free shipping', language)}</span>
                  </div>
                  <div className='summary-item'>
                    <span className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} text`}>{translate('Total', language)}</span>
                    <span className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} price`}>{formatCurrency(products.reduce((acc, cur) => acc + cur.quantity * cur.product.price, 0))}</span>
                  </div>
                  <div>
                    <button
                      type='button'
                      className='btn btn-primary btn-lg btn-block'
                      onClick={() => setIsSubmitOrder(true)}
                      onKeyDown={() => setIsSubmitOrder(true)}
                    >
                      {translate('Submit Order', language)}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;

{
  /* <>
      <div className='py-4 mt-5 '>
        {products.map(cartProduct => (
          <CartItem key={cartProduct.id} {...cartProduct} />
        ))}
      </div>
      <Container className=''>
        <Row
          style={{ position: 'fixed', bottom: 0 }}
          className={`${theme ? 'bg-light-black text-light' : 'bg-light text-balck'} justify-content-center w-100`}
        >
          <Col className='py-2'>
            <h4>Total Items: <strong>{products.length}</strong></h4>
          </Col>
          <Col className='py-2'>
            <h4>Total Price: {' '}
              <strong>
                {products.reduce((acc, cur) => acc + cur.quantity * cur.product.price, 0)} $
              </strong>
            </h4>
          </Col>
          <Col className='p-0' md={4}>
            <Button
              variant='danger'
              className='m-2'
              onClick={() => setIsSubmitOrder(true)}
              onKeyDown={() => setIsSubmitOrder(true)}
            >
              Submit Order
            </Button>
          </Col>
        </Row>
      </Container>
    </> */
}
