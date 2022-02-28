import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../../redux/actions/productActions';

const Product = () => {
  const products = useSelector(state => state.allProducts.products);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };


  const productList = products.map((product) => {
    const { id, title, price, image, category } = product;
    return (
      <div className='four wide column' key={id}>
        <Link to={`/product/${id}`}>
          <div className='ui link cards'>
            <div className='card'>
              <div className='image'>
                <img src={image} alt={title} />
              </div>
              <div className='content'>
                <div className='header'>{title}</div>
                <div className='meta price'>$ {price}</div>
                <div className='meta'>{category}</div>
              </div>
            </div>
          </div>
        </Link>
        <button onClick={() => handleDelete(id)}>delete</button>
      </div>
    )
  })
  return (
    <>
      {productList}
    </>
  );
};

export default Product;
