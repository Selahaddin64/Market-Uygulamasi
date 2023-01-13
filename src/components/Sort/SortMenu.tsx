/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-lone-blocks */
/* eslint-disable max-len */
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { translate } from '../../i18n';
import { RootState } from '../../redux/Language/store';

interface ISortMenuProps {
  lowestPrice: any;
  highestPrice: any;
  lowestRating: any;
  highestRating: any
}

export const SortMenu: FC<ISortMenuProps> = ({ lowestPrice, highestPrice, lowestRating, highestRating }) => {
  const dropdownEl = useRef<HTMLUListElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const { language } = useSelector((state: RootState) => state.lang);

  const handleClickOutside = useCallback((e:any) => {
    if (showDropdown && e.target.closest('.dropdown') !== dropdownEl.current) {
      setShowDropdown(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  const chooseHandlerLowestPrice = () => {
    setShowDropdown(false);
    lowestPrice();
  };

  const chooseHandlerHighestPrice = () => {
    setShowDropdown(false);
    highestPrice();
  };

  const chooseHandlerLowestRating = () => {
    setShowDropdown(false);
    lowestRating();
  };

  const chooseHandlerHighestRating = () => {
    setShowDropdown(false);
    highestRating();
  };

  return (
    <div className='headerClass'>
      <div className='header__nav'>
        <div className='header__nav_lang'>
          <button className='selected mr-16 w-75 rounded-pill' onClick={() => setShowDropdown(true)}>{translate('sort by', language)} {' '}</button>
          {showDropdown && (
          <ul className='dropdown' ref={dropdownEl}>
            <li onClick={() => chooseHandlerLowestPrice()}>{translate('price (lowest)', language)}</li>
            <li onClick={() => chooseHandlerHighestPrice()}>{translate('price (highest)', language)}</li>
            <li onClick={() => chooseHandlerLowestRating()}>{translate('rating (lowest)', language)}</li>
            <li onClick={() => chooseHandlerHighestRating()}>{translate('rating (highest)', language)}</li>
          </ul>
          )}
        </div>
      </div>
    </div>
  );
};

{ /* <select name='sort' id='sort'>
        <option onChange={() => lowestPrice()} value='price-lowest'>price (lowest)</option>
        <option onClick={() => highestPrice} value='price-highest'>price (highest)</option>
        <option onClick={() => lowestRating} value='rating-lowest'>rating (lowest)</option>
        <option onClick={() => highestRating} value='rating-highest'>rating (highest)</option>
      </select> */ }
