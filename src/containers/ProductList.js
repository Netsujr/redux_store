import React, { useEffect } from 'react';
import axios from 'axios';
import  { setProducts } from '../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import Product from './components/Product';

const ProductList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
    .get('https://fakestoreapi.com/products')
    .catch(error => console.log(error));
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='ui grid container'>
      <Product/>
    </div>
  );
};

export default ProductList;
