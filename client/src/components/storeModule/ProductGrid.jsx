import React from 'react';
import styled from 'styled-components';
import Product from './Product.jsx';

const ProductContainer = styled.div`
  grid-area: items;
  display: flex;
  flex-wrap: wrap;

  // @media (max-width: 899px) {

  // }
`;

const ProductGrid = ({ sellerProducts }) => (
  <ProductContainer>
    {
      sellerProducts.map((product, index) => (
        <Product product={product} />
      ))
    }
  </ProductContainer>
);

export default ProductGrid;
