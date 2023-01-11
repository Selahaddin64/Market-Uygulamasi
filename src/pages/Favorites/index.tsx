import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { translate } from '../../i18n';
import { useCartProductsSelector } from '../../redux/Favorites/likedSlice';
import useActions from '../../redux/hooks/useActions';
import { RootState } from '../../redux/Language/store';
import Favorites from './components/Favorites';

const FavoritesPage = () => {
  const [isSubmitOrder, setIsSubmitOrder] = useState(false);
  const { clearLike } = useActions();
  const items = useCartProductsSelector();
  const { language } = useSelector((state: RootState) => state.lang);

  useEffect(() => {
    if (isSubmitOrder) {
      clearLike();
    }
  }, [clearLike, isSubmitOrder]);

  return (
    <div className='cart-page'>
      <h1>{translate('Favorites', language)}</h1>
      {!isSubmitOrder ? (
        <Favorites products={items} setIsSubmitOrder={setIsSubmitOrder} />
      ) : (
        <p>{translate('Thank you for your favorites!', language)}</p>
      )}
    </div>
  );
};
export default FavoritesPage;
