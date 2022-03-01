import React, { useState } from "react";
import { connect } from "react-redux";
import { adjustProductQty, removeFromCart } from "../../../../redux/Store/storeActions";
import styled from "styled-components";

const CartProduct = ({ product, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(product.qty);

  const onChangeHandler = (event) => {
    setInput(event.target.value);
    adjustQty(product.id, event.target.value);
  };

  return (
    <CartProductContainer>
      <CartImageDetails>
        <img
          src={product.image}
          alt={product.title}
        />
        <CartProductDetails>
          <p> {product.title}</p>
          <p> {product.description}</p>
          <p> $ {product.price}</p>
        </CartProductDetails>
      </CartImageDetails>
      <CartProductActions>
        <CartProductQTY>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </CartProductQTY>
        <button
          onClick={() => removeFromCart(product.id)}>
          <img
            src="https://freesvg.org/img/trash.png"
            alt="trash"
          />
        </button>
      </CartProductActions>
    </CartProductContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustProductQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartProduct);

const CartProductContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  justify-content: space-between;

  button {
    width: 50px;
    height: 50px;
    border: 1px solid var(--secondary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    transition: all ease-in-out 0.6s;
    outline: none;

    &:hover {
      transform: scale(1.2);
      background-color: rgba(209, 15, 15, 0.5);
    }

    img {
      width: 35px;
      height: 35px;
    }
  }

  img {
    width: 100px;
    object-fit: contain;
    border-radius: 10px;
    margin: 1.5rem;
  }
  `;

const CartImageDetails = styled.div`
  display: flex;
  `;

const CartProductDetails = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--secondary-color);
  /* border: 1px solid blue; */

  &:nth-child(1) {
    font-size: 1rem;
    font-weight: bold;
  }

  &:nth-child(2) {
    font-size: 0.8rem;
  }

  &:nth-child(3) {
    font-size: 1rem;
    font-weight: bold;
  }
  `;

const CartProductActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0.6rem;
  /* border: 1px solid red; */
  `;

const CartProductQTY = styled.div`
  display: flex;
  align-items: center;

  input {
    padding: 10px;
    margin-left: 0.4rem;
    width: 60px;
    border-radius: 10px;
    border: 1px solid var(--secondary-color);
    outline: none;
  }
  `;
