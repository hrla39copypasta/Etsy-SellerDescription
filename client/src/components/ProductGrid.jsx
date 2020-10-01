import React from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
  background-color: cyan;
  grid-area: items;
`;

const ProductGrid = () => (
  <ProductContainer>
    <h2>i am product container</h2>
    <p>moomoo</p>
  </ProductContainer>
);

export default ProductGrid;
