import React from "react";
import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import Header from "./containers/Header";
import Products from "./containers/components/Products/ProductList";
import Cart from "./containers/components/Cart/Cart";
import AddProduct from "./containers/components/Products/Product/AddProduct";
import EditProduct from "./containers/components/Products/Product/EditProduct";
import ThankYou from "./containers/components/ThankYou";
import SingleProduct from "./containers/components/SingleProduct/SingleProduct";

function App({ currentProduct }) {

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/addProduct" element={<AddProduct />} />
          <Route exact path="/product/edit/:id" element={<EditProduct />} />
          <Route exact path="/thanks" element={<ThankYou />} />
          {/* App would crash sometimes when refreshing the page
          added this itinerary to stop that from happening */}
          <Route exact path="/product/:id" element={!currentProduct ? (<Navigate to='/' />
          ) : ( <SingleProduct /> )} />
        </Routes>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    currentProduct: state.store.currentProduct,
  };
};

export default connect(mapStateToProps)(App);
