import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Product from "./Product/Product";

const Products = ({ products }) => {
  return (
    <ProductsContainer>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductsContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);

const ProductsContainer = styled.div`
`;
