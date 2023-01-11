/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/button-has-type */
import { HeartIcon, ShoppingCartIcon, SunIcon, MoonIcon } from '@heroicons/react/outline';
import { FC, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../redux/Language/store';
import { setLanguage } from '../redux/Language/langActions';
import { selectCartItems } from '../redux/cart/cart.slice';
import { selectLikedItems } from '../redux/Favorites/likedSlice';
import { ThemeContext } from '../ThemeContext/ThemeProvider';

interface HeaderProps {
  fixed?: boolean;
  transparent?: boolean;
}

const Header: FC<HeaderProps> = ({ fixed, transparent }) => {
  const items = useSelector(selectLikedItems);
  const product = useSelector(selectCartItems);

  const { theme, setThemeMode } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme);

  const { language } = useSelector((state: RootState) => state.lang);
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownEl = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setThemeMode(darkMode);
  }, [darkMode]);

  let headerClass = 'header';

  if (fixed) {
    headerClass += ' header--fixed';
  }

  if (transparent) {
    headerClass += ' header--transparen';
  }

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

  const chooseLanguageHandler = (value: string) => {
    setShowDropdown(false);
    dispatch(setLanguage(value));
  };

  return (
    <Navbar collapseOnSelect expand='md' style={{ width: '100%', position: 'fixed', zIndex: 100 }} variant={darkMode ? 'dark' : 'light'} className={`${darkMode ? 'bg-light-black border-bottom' : 'bg-light border-bottom'} sticky top-0 z-30 flex w-full items-between justify-content-between bg-[#E7ECEE] p-4`}>
      <div className='flex items-center justify-center md:w-1/5'>
        <Link to='product'>
          <div className={`${darkMode ? 'text-dark-primary' : 'text-light-primary'} relative transition mr-6`}>
            <button
              className='bg-blue-600 hover:bg-blue-700 rounded-full w-32 h-8 text-white font-bold before:absolute before:inset-x-0 before:-bottom-1.5 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-bl before:bg-black before:transition-all before:duration-200 hover:before:scale-x-100'
            >
              Coin
              <span className='text-gray-400'>Shop</span>
            </button>
          </div>
        </Link>
        <Nav.Link
          className={darkMode ? 'text-dark-primary' : 'text-light-primary'}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <SunIcon className='h-6 w-6' /> : <MoonIcon className='h-6 w-6' />}
        </Nav.Link>
        <Nav.Link>
          <div className='headerClass'>
            <div className='header__nav'>
              <div className='header__nav_lang'>
                <button className='selected' onClick={() => setShowDropdown(true)}>{language}</button>
                {showDropdown && (
                <ul className='dropdown' ref={dropdownEl}>
                  <li onClick={() => chooseLanguageHandler('EN')}>EN</li>
                  <li onClick={() => chooseLanguageHandler('DE')}>DE</li>
                  <li onClick={() => chooseLanguageHandler('TR')}>TR</li>
                </ul>
                )}
              </div>
            </div>
          </div>
        </Nav.Link>
      </div>
      <div className='flex items-end justify-end gap-x-4 md:w-1/5'>
        <Link to='cart'>
          <div className={`${darkMode ? 'text-dark-primary' : 'text-light-primary'} relative cursor-pointer`}>
            <span className='absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white'>
              {product.length}
            </span>
            <ShoppingCartIcon className='h-6 w-6 cursor-pointer opacity-75 transition hover:opacity-100' />
          </div>
        </Link>
        <Link to='favorites'>
          <div className={`${darkMode ? 'text-dark-primary' : 'text-light-primary'} relative cursor-pointer`}>
            <span className='absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white'>
              {items.length}
            </span>
            <HeartIcon className='h-6 w-6 cursor-pointer opacity-75 transition hover:opacity-100' />
          </div>
        </Link>
      </div>
    </Navbar>
  );
};
export default Header;
