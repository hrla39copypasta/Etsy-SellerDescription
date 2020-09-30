/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import InfoBlock from './InfoBlock.jsx';

const Container = styled.div`
  grid-area: seller;
`;

const StoreContainer = styled.div`

  .more-info {
    margin-bottom: 6px;
    font-size: 13px;
    line-height: 183rd px;
  }
`;

const StoreLink = styled.a`
  color: black;
  text-decoration: inherit;
  cursor: pointer;
  line-height: 24px;
`;

const SeeAllItems = styled.a`
  color: black;
  text-decoration: inherit;
  cursor: pointer;
  line-height: 0;
  font-weight: bold;
`;

const StoreName = styled.h2`
  font-size: 2em;
  margin-bottom: 6px;
  font-family: 'Piazzolla', serif;
  font-weight: 300;
  margin-top: 0;
  line-height: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const StoreImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 5px;
`;

const MoreInfoContainer = styled.div`
  display: flex;
  margin-top: 28px;
`;

const Seller = ({ seller }) => (
  <Container>
    {/* image */}
    <a href="#">
      <StoreImage src={seller.store_image} alt="Store" />
    </a>

    <StoreContainer>
      <p className="more-info">More from</p>
      {/* store name */}
      <StoreName href="#">
        <StoreLink>
          {seller.store_name}
        </StoreLink>
      </StoreName>
      <br />
      <SeeAllItems href="#">See all 10 items</SeeAllItems>
    </StoreContainer>

    <MoreInfoContainer>
      {/* Sales */}
      <InfoBlock title="Sales" data={seller.sales} />
      {/* On Etsy Since */}
      <InfoBlock title="On Etsy since" data={seller.year_started} />
      {/* Based in */}
      <InfoBlock title="Based in" data={seller.based_in} />
    </MoreInfoContainer>
  </Container>
);

export default Seller;
