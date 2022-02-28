import React, { useEffect } from "react";
import styled from "styled-components";
import { connect, useSelector } from "react-redux";
import Product from "./Product/Product";

const Products = () => {
  const products = useSelector(state => state.store.products);
  console.log(products);


  return (
    <ProductsContainer>
      <Product key={products.id} products={products} />
    </ProductsContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.store.products,
  };
};

export default connect(mapStateToProps)(Products);

const ProductsContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;
