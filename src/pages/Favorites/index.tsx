import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { translate } from '../../i18n';
import { useCartProductsSelector } from '../../redux/Favorites/favoritedSlice';
import useActions from '../../redux/hooks/useActions';
import { RootState } from '../../redux/Language/store';
import { useThemeHook } from '../../ThemeContext/ThemeProvider';
import Favorites from './components/Favorites';

const FavoritesPage = () => {
  const [isSubmitOrder, setIsSubmitOrder] = useState(false);
  const { clearFavorites } = useActions();
  const items = useCartProductsSelector();
  const { language } = useSelector((state: RootState) => state.lang);
  const [theme] = useThemeHook();

  useEffect(() => {
    if (isSubmitOrder) {
      clearFavorites();
    }
  }, [clearFavorites, isSubmitOrder]);

  return (
    <div>
      <h1 className={`${theme ? 'text-light my-5' : 'text-black my-5'} pt-16 text-center`}>{translate('Favorites', language)}</h1>
      {!isSubmitOrder ? (
        <Favorites products={items} setIsSubmitOrder={setIsSubmitOrder} />
      ) : (
        <p>{translate('Thank you for your favorites!', language)}</p>
      )}
    </div>
  );
};
export default FavoritesPage;
