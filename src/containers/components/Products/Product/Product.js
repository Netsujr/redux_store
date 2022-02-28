import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect, useSelector } from "react-redux";
import { loadCurrentItem, addToCart } from "../../../../redux/Store/storeActions";

const Product = ({ addToCart, loadCurrentItem }) => {
  const products = useSelector(state => state.store.products);
  const { id, title } = products;

  return (
    <>
      {products.map((product) => (
        <ProductsContainer>
          <ImgContainer>
            <img
              src={product.image}
              alt={product.title} />
          </ImgContainer>
          <Details>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>$ {product.price}</p>
          </Details>

          <Buttons>
            <Link to={`/product/${product.id}`}>
              <button
                onClick={() => loadCurrentItem(product)}
              >View Item</button>
            </Link>
            <button
              onClick={() => addToCart(product.id)}
            >Add To Cart</button>
          </Buttons>
        </ProductsContainer>
      ))}
    </>
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
    width: 70vw;
    margin-bottom: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 10px;
    display: flex;
    justify-content: space-between;

    img {
      width: 150px;
      object-fit: contain;
      border-radius: 5px;
    }
    `;

const Details = styled.div`
    padding: 1rem;
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: space-between;

    p:nth-child(1) {
      font-size: 1.2rem;
      font-weight: bold;
      color: var(--secondary-color);
    }

    p:nth-child(2) {
      font-size: 1rem;
      color: var(--secondary-color);
    }

    p:nth-child(3) {
      font-size: 1.2rem;
      font-weight: bold;
      color: var(--secondary-color);
    }
    `;

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;

    button {
      width: 100px;
      padding: 0.5rem;
      border: 1px solid var(--secondary-color);
      border-radius: 10px;
      font-size: 0.65rem;
      font-weight: bold;
      cursor: pointer;
      margin: 1rem 0;

      &:hover {
        opacity: 0.75;
      }

      &:nth-child(1) {
        background: var(--light-color);
        color: var(--secondary-color);
      }

      &:nth-child(2) {
        background: var(--secondary-color);
        color: var(--light-color);
      }

    }
    `;

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding: .5rem;
    `;
