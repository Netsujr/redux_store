import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import Header from "./containers/Header";
import Products from "./containers/components/Products/ProductList";
import Cart from "./containers/components/Cart/Cart";
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
          {/* {!current ? (
            <Navigate replace to="/" />
          ) : (
            <Route exact path="/product/:id" element={<SingleProduct/>} />
          )} */}
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
