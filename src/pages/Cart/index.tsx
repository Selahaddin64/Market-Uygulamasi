import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { translate } from '../../i18n';
import { useCartProductsSelector } from '../../redux/cart/cart.slice';
import useActions from '../../redux/hooks/useActions';
import { RootState } from '../../redux/Language/store';
import { useThemeHook } from '../../ThemeContext/ThemeProvider';
import Cart from './components/Cart';

const CartPage = () => {
  const [isSubmitOrder, setIsSubmitOrder] = useState(false);
  const { clearCart } = useActions();
  const products = useCartProductsSelector();
  const { language } = useSelector((state: RootState) => state.lang);
  const [theme] = useThemeHook();

  useEffect(() => {
    if (isSubmitOrder) {
      clearCart();
    }
  }, [clearCart, isSubmitOrder]);

  return (
    <div>
      <h1 className={`${theme ? 'text-light my-5' : 'text-black my-5'} pt-16 text-center`}>{translate('Cart', language)}</h1>
      {!isSubmitOrder ? (
        <Cart products={products} setIsSubmitOrder={setIsSubmitOrder} />
      ) : (
        <p>{translate('Thank you for your order!', language)}</p>
      )}
    </div>
  );
};

export default CartPage;
