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

  console.log(products);
  console.log(currentProduct);

  const [selectedProduct, setSelectedProduct] = useState({
    id: currentProduct.id,
    title: '',
    description: '',
    price: '',
    image: currentProduct.image
  });

  const updateProduct = (id) => {
    dispatch(updateCurrentProduct(id));
  };

  useEffect(() => {
    setSelectedProduct(currentProduct);
  }, [currentProduct, products]);


  const handleChange = (productKey, newValue) => {
    setSelectedProduct({
      ...selectedProduct,
      [productKey]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(selectedProduct);
    navigate('/');
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <label for="name"><h1>Edit Product</h1></label>

        <input
          type="text"
          value={selectedProduct?.title ? selectedProduct.title : ''}
          onChange={(e) => handleChange('title', e.target.value)}
          placeholder="Product Title"
          title='title'
        />


        <input
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

        <ButtonsContainer>
          <button>Submit</button>
          <Link to='/' className='btn btn-danger'>Home</Link>
        </ButtonsContainer>
      </form>
    </FormContainer>
  );
};

export default EditProduct;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 30rem;
  background-color: #f5f5f5;
  margin-top: 2rem;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  `;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  `;
