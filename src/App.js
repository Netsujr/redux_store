import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductList from './containers/ProductList';
import Cart from './containers/components/Cart/Cart';
// import Product from './containers/components/Product';
import ProductDetails from './containers/components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProductList/>} />
          <Route exact path="/product/:productId" element={<ProductDetails/>} />
          <Route exact path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
