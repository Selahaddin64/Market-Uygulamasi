import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Cart from './pages/Cart/index';
import Favorites from './pages/Favorites/index';
import Products from './pages/Products/index';
import { useThemeHook } from './ThemeContext/ThemeProvider';

const App = () => {
  const [theme] = useThemeHook();
  return (
    <main className={theme ? 'bg-black' : 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto' }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Products />} />
          <Route path='product' element={<Products />} />
          <Route path='cart' element={<Cart />} />
          <Route path='favorites' element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};
export default App;
