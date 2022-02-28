import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import CartItem from "./CartItem/CartItem";
const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);



  return (
    <div >
      <div >
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div >
        <h4 > >Cart Summary</h4>
        <div >
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
        </div>
        <button >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
