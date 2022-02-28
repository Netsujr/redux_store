import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <CONTAINER>
      <div>
        <Link to='/' >
          <h2>Renato's-Store</h2>
        </Link>
      </div>
      <div>
        <Link to="/cart">
          <h3>Cart</h3>
          <img
            src="https://image.flaticon.com/icons/svg/102/102276.svg"
            alt="shopping cart"
          />
          {/* <div>{cartCount}</div> */}
        </Link>
      </div>
    </CONTAINER>
  );
};

export default Header;

const CONTAINER = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px;
  border: 1px solid black;
  `;
