import React, { useState } from "react";
import { connect } from "react-redux";
import { adjustItemQty, removeFromCart } from "../../../../redux/Store/storeActions";
import styled from "styled-components";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <CartItemContainer>
      <img
        src={item.image}
        alt={item.title}
      />
      <CartItemDetails>
        <p> {item.title}</p>
        <p> {item.description}</p>
        <p> $ {item.price}</p>
      </CartItemDetails>
      <CartItemActions>
        <CartItemQTY>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </CartItemQTY>
        <button
          onClick={() => removeFromCart(item.id)}
        // {itemBtn}
        >
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt=""
          />
        </button>
      </CartItemActions>
    </CartItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);

const CartItemContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;

  button {
    width: 50px;
    height: 50px;
    border: 1px solid var(--secondary-color);
    border-radius: 50%;
    cursor: pointer;
    transition: all ease-in-out 0.7s;
    outline: none;

    &:hover {
      transform: scale(1.2) rotate(360deg);
      background-color: rgb(209, 15, 15);
    }

    img {
      width: 25px;
      height: 25px;
    }
  }


  img {
    width: 350px;
    object-fit: contain;
    border-radius: 10px;
  }
  `;

const CartItemDetails = styled.div`
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

const CartItemActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0.6rem;
  /* border: 1px solid red; */
  `;

const CartItemQTY = styled.div`
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
