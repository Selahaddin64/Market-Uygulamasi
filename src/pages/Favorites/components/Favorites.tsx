/* eslint-disable import/order */
import { FC } from 'react';
import FavoritesItem from './FavoritesItem';
import '../favorites.module.scss';
import { FavProducts } from '../../../redux/Favorites/favorites.types';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/Language/store';
import { translate } from '../../../i18n';
import { useThemeHook } from '../../../ThemeContext/ThemeProvider';

interface IFavoritesProps {
  products: FavProducts[];
}

const Favorites: FC<IFavoritesProps> = ({ products }) => {
  const { language } = useSelector((state: RootState) => state.lang);
  const [theme] = useThemeHook();

  if (!products.length) return <h3 className={`${theme ? 'text-light my-5' : 'text-black my-5'} pt-16 text-center`}>{translate('Favorites is empty', language)}</h3>;

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      {products.map(favProduct => (
        <FavoritesItem key={favProduct.id} {...favProduct} />
      ))}
    </div>
  );
};

export default Favorites;
