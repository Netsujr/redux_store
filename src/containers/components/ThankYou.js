import React from 'react';
import styled from 'styled-components';

const ThankYou = () => {
  return (
    <Container>
      <h1>😎 Shopped like a boss! 😎</h1>
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
