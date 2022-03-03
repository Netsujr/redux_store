import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentProduct } from "../../../../redux/Store/storeActions";


const EditProduct = () => {
  const products = useSelector(state => state.store.products);
  const navigate = useNavigate();
  let { id } = useParams();
  const currentProduct = products.find(product => product.id === parseInt(id));
  const dispatch = useDispatch();

  const [selectedProduct, setSelectedProduct] = useState({
    id: currentProduct.id,
    title: '',
    description: '',
    price: '',
    image: currentProduct.image
  });

  useEffect(() => {
    setSelectedProduct(currentProduct);
  }, [currentProduct, products]);

  const handleChange = (productKey, newValue) => {
    setSelectedProduct({
      ...selectedProduct,
      [productKey]: newValue,
    });
  };

  const updateProduct = (id) => {
    dispatch(updateCurrentProduct(id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(selectedProduct);
    navigate('/');
  };

  return (
    <>
      <h1 style={{ marginLeft: '60px' }}>Edit Product</h1>
      <ProductContainer>
        <form onSubmit={handleSubmit} className="form">
          <img src={selectedProduct.image} alt={selectedProduct.title} />
          <ProductDetails>
            <label htmlFor="title">Title</label>
            <textarea
              type="text"
              wrap='soft'
              value={selectedProduct?.title ? selectedProduct.title : ''}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="Product Title"
              title='title'
            />

            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              value={selectedProduct?.description ? selectedProduct.description : ''}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="Product Description"
              name='description'
            />

            <input
              type="number"
              value={selectedProduct?.price ? selectedProduct.price : ''}
              onChange={(e) => handleChange('price', e.target.value)}
              placeholder="Price"
              name='price'
            />
          </ProductDetails>
          <ButtonsContainer>
            <button>Submit</button>
            <Link to='/'>Home</Link>
          </ButtonsContainer>
        </form>
      </ProductContainer>
    </>
  );
};

export default EditProduct;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  `;

const ProductContainer = styled.div`
  width: 1100px;
  margin: 2rem auto;
  display: flex;

  .form {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    width: 45%;
    padding: 10px 17px;
    background: var(--secondary-color);
    color: var(--light-color);
    border: 1px solid var(--secondary-color);
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    outline: none;

    &:hover {
      opacity: 0.75;
    }
  }

  img {
    height: 400px;
    object-fit: contain;
    margin-right: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 10px;
    padding: 2rem;
  }
  `;

const ProductDetails = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--secondary-color);

  textarea:nth-child(1), textarea:nth-child(2) {
    font-size: 1.4rem;
    height: 100px;
    width: 500px;
    text-align: start;
    text-wrap: normal;
  }

  input {
    font-size: 1.2rem;
    font-weight: bold;
  }
  `;
