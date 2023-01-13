/* eslint-disable import/order */
import { FC } from 'react';
import FavoritesItem from './FavoritesItem';
import '../favorites.module.scss';
import { FavProducts } from '../../../redux/Favorites/favorites.types';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/Language/store';
import { translate } from '../../../i18n';

interface ICartProps {
  setIsSubmitOrder: (isSubmitOrder: boolean) => void;
  products: FavProducts[];
}

const Favorites: FC<ICartProps> = ({ products }) => {
  const { language } = useSelector((state: RootState) => state.lang);
  if (!products.length) return <p>{translate('Favorites is empty', language)}</p>;

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      {products.map(favProduct => (
        <FavoritesItem key={favProduct.id} {...favProduct} />
      ))}
    </div>
  );
};

export default Favorites;
