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
    margin: 2rem auto;
    width: 1100px;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */

    button {
      padding: 10px 17px;
      border: 1px solid var(--secondary-color);
      border-radius: 10px;
      background: var(--primary-color);
      color: var(--light-color);
      font-size: 1.2rem;
      font-weight: bold;
      cursor: pointer;

      &:focus {
        outline: none;
        border: 1px solid var(--secondary-color);
      }

      &:hover {
        opacity: 0.75;
      }
    }
    `;

const CartItems = styled.div`
    flex: 0.7;
    margin-right: 1rem;
    /* border: 1px solid pink; */
    `;

const CartSummary = styled.div`
    height: 250px;
    flex: 0.3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 10px;

    h4 {
      font-size: 1.2rem;
      font-weight: bold;
    }
    `;

const Price = styled.div`
    display: flex;
    align-items: center;
    /* border: 1px solid blue; */

    span:nth-child(1) {
      font-size: 0.9rem;
      flex: 0.6;
    }

    span:nth-child(2) {
      flex: 0.4;
      font-size: 1.2rem;
      font-weight: bold;
    }
    `
