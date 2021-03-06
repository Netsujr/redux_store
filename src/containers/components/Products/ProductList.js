import React, { useEffect } from "react";
import styled from "styled-components";
import { connect, useDispatch, useSelector } from "react-redux";
import Product from "./Product/Product";
import axios from "axios";
import { loadAllProducts } from "../../../redux/Store/storeActions";

const Products = () => {
  const products = useSelector(state => state.store.products);
  // console.log(products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
      .catch(error => {
        console.log(error);
      });
    dispatch(loadAllProducts((response.data)));
  };

  // I think the state keeps resetting to the original array when I edit a product
  // So I added this condition here to load the page only once,
  // and then load the products from the API. Slightly dirty method though.
  const loadPageOnce = () => {
    if (products.length <= 0) {
      fetchProducts();
    }
  };

  useEffect(() => {
    loadPageOnce();
  }, []);

  return (
    <>
      <ProductsContainer>
        {products.length <= 0 ? <h1>Loading Products...</h1> :
          <Product key={products.id} products={products} />
        }
      </ProductsContainer>
    </>
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
