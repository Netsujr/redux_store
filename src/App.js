import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import Header from "./containers/Header";
import Products from "./containers/components/Products/ProductList";
import Cart from "./containers/components/Cart/Cart";
import ThankYou from "./containers/components/ThankYou";
import SingleProduct from "./containers/components/SingleProduct/SingleProduct";

function App({ current }) {

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/" element={<Products/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/product/:id" element={<SingleProduct/>} />
          <Route exact path="/thanks" element={<ThankYou/>} />
        </Routes>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.store.currentItem,
  };
};

export default connect(mapStateToProps)(App);
