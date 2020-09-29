import React from 'react';
import styled from 'styled-components';
import InfoBlock from './InfoBlock.jsx';

const SellerInfo = styled.div`
  grid-area: seller;
`;

const MoreInfo = styled.div`
  display: flex;
`;

const Seller = () => (
  <SellerInfo>
    {/* image */}
    <p>More from</p>
    <a href='#'>See all 10 items -></a>
    <MoreInfo>
      {/* Sales */}
      <InfoBlock />
      {/* On Etsy Since */}
      <InfoBlock />
      {/* Based in */}
      <InfoBlock />
    </MoreInfo>
  </SellerInfo>
);

export default Seller;
