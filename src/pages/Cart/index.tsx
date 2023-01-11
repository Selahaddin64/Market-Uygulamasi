import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { translate } from '../../i18n';
import { useCartProductsSelector } from '../../redux/cart/cart.slice';
import useActions from '../../redux/hooks/useActions';
import { RootState } from '../../redux/Language/store';
import Cart from './components/Cart';

const CartPage = () => {
  const [isSubmitOrder, setIsSubmitOrder] = useState(false);
  const { clearCart } = useActions();
  const products = useCartProductsSelector();
  const { language } = useSelector((state: RootState) => state.lang);

  useEffect(() => {
    if (isSubmitOrder) {
      clearCart();
    }
  }, [clearCart, isSubmitOrder]);

  return (
    <div>
      {!isSubmitOrder ? (
        <Cart products={products} setIsSubmitOrder={setIsSubmitOrder} />
      ) : (
        <p>{translate('Thank you for your order!', language)}</p>
      )}
    </div>
  );
};

export default CartPage;
