import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductList from './containers/ProductList';
import Product from './containers/components/Product';
import ProductDetails from './containers/components/Product';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProductList/>} />
          <Route exact path="/product/:productID" element={<ProductDetails/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
