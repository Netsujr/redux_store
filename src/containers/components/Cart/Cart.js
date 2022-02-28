import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import CartItem from "./CartItem/CartItem";
const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <CartContainer>
      <CartItems>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </CartItems>
      <CartSummary>
        <h4>Cart Summary</h4>
        <Price>
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
        </Price>
        <button>
          Proceed To Checkout
        </button>
      </CartSummary>
    </CartContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);

const CartContainer = styled.div`
`;

const CartItems = styled.div`
`;

const CartSummary = styled.div`
`;
