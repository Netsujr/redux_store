import React from "react";
import styled from 'styled-components';
import { connect } from "react-redux";
import { addToCart } from "../../redux/Store/storeActions";

const SingleItem = ({ current, addToCart }) => {
  return (
    <ItemContainer>
      <img

        src={current.image}
        alt={current.title}
      />
      <ItemDetails>
        <p>{current.title}</p>
        <p>{current.description}</p>
        <p>$ {current.price}</p>

        <button
          onClick={() => addToCart(current.id)}
        >Add To Cart
        </button>
      </ItemDetails>
    </ItemContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);

const ItemContainer = styled.div`
`;

const ItemDetails = styled.div`
`;
