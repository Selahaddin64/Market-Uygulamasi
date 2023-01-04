import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route index element={<Products/>} />
        <Route path="product" element={<Products/>} />
        <Route path="cart" element={<Cart />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
