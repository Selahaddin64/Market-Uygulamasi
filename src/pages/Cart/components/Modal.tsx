/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/no-unescaped-entities */
import { TrashIcon } from '@heroicons/react/outline';
import { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { translate } from '../../../i18n';
import { addToFavorited } from '../../../redux/Favorites/favoritedSlice';
import useActions from '../../../redux/hooks/useActions';
import { RootState } from '../../../redux/Language/store';

interface IModalProps {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
}

const Example: FC<IModalProps> = ({ id, title, price, thumbnail, rating }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { language } = useSelector((state: RootState) => state.lang);

  const { deleteCartItem } = useActions();
  const dispatch = useDispatch();

  const addToFavHandler = (productId: number) => {
    const favProduct = {
      id: productId,
      product: {
        id: productId,
        title,
        price,
        thumbnail,
        rating,
      },
    };

    dispatch(addToFavorited(favProduct));
  };

  return (
    <>
      <Button variant='danger' onClick={handleShow}>
        <TrashIcon className='h-6 w-6' />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{translate('Explanation', language)}</Modal.Title>
        </Modal.Header>
        <Modal.Body> {translate('Are you sure you want to delete?', language)}
        </Modal.Body>
        <Modal.Footer>
          <div onClick={handleClose}>
            <Button variant='danger' onClick={() => deleteCartItem(id)}>
              <TrashIcon className='h-6 w-6' />
            </Button>
          </div>
          <div onClick={handleClose}>
            <span onClick={() => deleteCartItem(id)}><Button onClick={() => addToFavHandler(id)} variant='primary'>{translate('Delete and add to favorites', language)}</Button></span>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Example;
