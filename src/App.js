import './App.css';
import Cart from './Cart';
import ProductList from './ProductList';
import ProductPage from './ProductPage';
import Navbar from './NavBar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App text-bg-dark text-center">
      <Navbar/>
      <header className="App-header text-bg-light">
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='products/:id' element={<ProductPage />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
