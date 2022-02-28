import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { loadCurrentItem, addToCart } from "../../../../redux/Store/storeActions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <ProductsContainer>
      <img
        src={product.image}
        alt={product.title}
      />

      <Details>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>$ {product.price}</p>
      </Details>

      <Buttons>
        <Link to={`/product/${product.id}`}>
          <button
            onClick={() => loadCurrentItem(product)}
          >
            View Item
          </button>
        </Link>
        <button
          onClick={() => addToCart(product.id)}
        >Add To Cart
        </button>
      </Buttons>
    </ProductsContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);

const ProductsContainer = styled.div`
  width: 900px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;

  img {
    width: 250px;
    object-fit: contain;
    border-radius: 10px;
  }
  `;

const Details = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:nth-child(1) {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &:nth-child(2) {
    font-size: 0.8rem;
    font-weight: bold;
    color: var(--secondary-color);
  }

  &:nth-child(3) {
    font-size: 0.85rem;
    color: var(--secondary-color);
  }

  &:nth-child(4) {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--secondary-color);
  }
  `;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;

  button {
    width: 100px;
    padding: 0.5rem;
    border: 1px solid var(--secondary-color);
    border-radius: 10px;
    font-size: 0.65rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      opacity: 0.75;
    }
  }
  `;
