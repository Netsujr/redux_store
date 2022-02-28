import React, { useEffect } from 'react';
import axios from 'axios';
import { setProducts } from '../redux/actions/productActions';
import { useDispatch } from 'react-redux';
import Product from './components/Product';

const ProductList = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch(error => console.log(error));
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, [dispatch]);

  return (
    <div className='ui grid container'>
      <Product />
    </div>
  );
};

export default ProductList;
