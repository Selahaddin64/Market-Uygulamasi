import { FC } from 'react';
import { Button } from 'react-bootstrap';
import useActions from '../../../redux/hooks/useActions';

interface RemoveFromCartBtnProps {
  id: number;
  children?: React.ReactNode;
}

const RemoveFromCartBtn: FC<RemoveFromCartBtnProps> = ({ id, children }) => {
  const { removeFromCartProduct } = useActions();

  return (
    <Button
      type='button'
      className='btn btn-danger ml-10%'
      data-product-id={id}
      onClick={() => removeFromCartProduct(id)}
      onKeyDown={() => removeFromCartProduct(id)}
    >
      {children}
    </Button>
  );
};

export default RemoveFromCartBtn;
