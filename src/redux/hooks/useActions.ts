import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { bindActionCreators } from 'redux';
import { productSlice } from '../products/product.slice';
import { cartSlice } from '../cart/cart.slice';
import { favoritedSlice } from '../Favorites/favoritedSlice';

const AllActions = {
  ...productSlice.actions,
  ...cartSlice.actions,
  ...favoritedSlice.actions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(AllActions, dispatch);
};

export default useActions;
