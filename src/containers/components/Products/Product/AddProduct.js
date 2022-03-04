import React, { useState } from 'react';
import styled from 'styled-components';
import { createProduct } from "../../../../redux/Store/storeActions";
import Image from 'react-random-image';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const AddProduct = () => {
  const [productTitle, setProductTitle] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ID = Date.now();
  const randomImage = Image({
    width: 250,
    height: 250,
    background: '#ccc',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: ID,
      title: productTitle,
      description: productDescription,
      price: productPrice,
    };
    dispatch(createProduct(newProduct));
    navigate('/');
  };

  const onTitleChange = (e) => {
    setProductTitle(e.target.value);
  };

  const onDescriptionChange = (e) => {
    setProductDescription(e.target.value);
  };

  const onPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  return (
    <>
      <ProductContainer>
        <TitleImage>
          <h1>Edit Product</h1>
          <img src={randomImage} alt={randomImage.name} />
        </TitleImage>
        <ProductDetails>
          <form className="form">
            <label htmlFor="title">Title</label>
            <textarea
              type="text"
              wrap='soft'
              value={productTitle}
              onChange={onTitleChange}
              placeholder="Product Title"
              title='title'
            />

            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              value={productDescription}
              onChange={onDescriptionChange}
              placeholder="Product Description"
              name='description'
            />
            <label htmlFor="price">Price</label>
            <input
              type="number"
              value={productPrice}
              onChange={onPriceChange}
              placeholder="Price"
              name='price'
            />
          </form>
          <ButtonsContainer>
            <button onClick={handleSubmit}>Submit</button>
            <Link
              style={{ color: 'green', fontWeight: 'bold', fontSize: '20px' }}
              to='/' >Back</Link>
          </ButtonsContainer>
        </ProductDetails>
      </ProductContainer>
    </>
  );
};

export default AddProduct;

const ProductContainer = styled.div`
  width: 1100px;
  margin: 2rem auto;
  display: flex;
  /* flex-direction: column; */

  .form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin: 1rem auto;

    textarea {
      font-size: 1rem;
      min-height: 100px;
      min-width: 500px;
      text-align: start;
      text-wrap: normal;
      border: 1px solid var(--secondary-color);
      border-radius: 10px;
      padding: 1rem;
      margin-bottom: 1rem;
    }

    input {
      font-size: 1.2rem;
      font-weight: bold;
      height: 60px;
      width: 150px;
      padding: 1rem;
      border: 1px solid var(--secondary-color);
      border-radius: 10px;
      text-align: center;
    }
  }
  `;

const TitleImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

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
  `;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;

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
  `;
