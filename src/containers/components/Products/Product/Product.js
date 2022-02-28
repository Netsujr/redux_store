import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { loadCurrentItem, addToCart } from "../../../redux/Store/storeActions";

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
`;

const Details = styled.div`
`;

const Buttons = styled.div`
`;
