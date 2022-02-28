import React from 'react';
import styled from 'styled-components';

const ThankYou = () => {
  return (
    <Container>
      <h1>Thank You for shopping with us!</h1>
    </Container>
  );
};

export default ThankYou;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  h1 {
    font-size: 5rem;
  }
`;
