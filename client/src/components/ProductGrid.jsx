import React from 'react';
import styled from 'styled-components';
import Product from './Product.jsx';

const ProductContainer = styled.div`
  grid-area: items;
  display: flex;
  flex-wrap: wrap;
`;

const ProductGrid = () => (
  <ProductContainer>
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
  </ProductContainer>
);

export default ProductGrid;
