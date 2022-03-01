import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect, useDispatch, useSelector } from "react-redux";
import { loadCurrentProduct, addToCart, deleteProduct, updateCurrentProduct } from "../../../../redux/Store/storeActions";

const Product = ({ addToCart, loadCurrentProduct, removeFromCart }) => {
  const products = useSelector(state => state.store.products);
  const [newInfo, setNewInfo] = useState({
    title: "",
    description: "",
    price: "",
  });
  const dispatch = useDispatch();

  const removeProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  const updateProduct = (id) => {
    dispatch(updateCurrentProduct(id));
  };

  console.log(products);
  return (
    <>
      {products.map((product) => (
        <ProductsContainer key={product.id}>
          <ImgContainer>
            <img
              src={product.image}
              alt={product.title} />
          </ImgContainer>
          <Details>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>$ {product.price}</p>
          </Details>

          <Buttons>
            <Link to={`/product/${product.id}`}>
              <button onClick={() => loadCurrentProduct(product)}
              >View Product</button>
            </Link>
            <button onClick={() => addToCart(product.id)}
            >Add To Cart</button>
            <UpdateProduct>
              <button onClick={() => removeProduct(product.id)}>
                <img
                  src="https://freesvg.org/img/trash.png"
                  alt="trash" />
              </button>
              <button onClick={() => updateProduct({
                id: product.id,
                title: 'Product Changed!',
                description: 'This product has been changed!',
                price: '99.99',
                image: product.image,
              })}>
                {/* {console.log(products)} */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png" alt="edit" />
              </button>
            </UpdateProduct>
          </Buttons>
        </ProductsContainer>
      ))}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentProduct: (product) => dispatch(loadCurrentProduct(product)),
    // updateCurrentProduct: (product) => dispatch(updateCurrentProduct(product)),
  };
};

export default connect(null, mapDispatchToProps)(Product);

const ProductsContainer = styled.div`
    width: 70vw;
    margin-bottom: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 10px;
    display: flex;
    justify-content: space-between;

    img {
      width: 150px;
      object-fit: contain;
      border-radius: 5px;
    }
    `;

const Details = styled.div`
    padding: 1rem;
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: space-between;

    p:nth-child(1) {
      font-size: 1.2rem;
      font-weight: bold;
      color: var(--secondary-color);
    }

    p:nth-child(2) {
      font-size: 1rem;
      color: var(--secondary-color);
    }

    p:nth-child(3) {
      font-size: 1.2rem;
      font-weight: bold;
      color: var(--secondary-color);
    }
    `;

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    button {
      width: 100px;
      padding: 0.5rem;
      border: 1px solid var(--secondary-color);
      border-radius: 10px;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      margin: 1rem 0;

      &:hover {
        opacity: 0.75;
      }

      &:nth-child(1) {
        background: var(--light-color);
        color: var(--secondary-color);
      }

      &:nth-child(2) {
        background: var(--secondary-color);
        color: var(--light-color);
      }
    }
    `;

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding: .5rem;
    `;

const UpdateProduct = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;

    button {
      width: 45px;
      height: 45px;
      border: 1px solid var(--secondary-color);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      cursor: pointer;
      transition: all ease-in-out 0.6s;
      outline: none;
      margin: 5px 5px;

      &:nth-child(1), &:nth-child(2) {
        background: var(--primary-color);
        color: var(--light-color);
      }

      &:nth-child(1):hover {
        transform: scale(1.2) rotate(360deg);
        background-color: rgba(209, 15, 15, 0.5);
      }

      &:nth-child(2):hover {
        transform: scale(1.2);
        background-color: lightgreen;
      }


      img {
        width: 25px;
        height: 25px;
      }
    }

    img {
      width: 10px;
      height: 10px;
    }
  }
  `;
