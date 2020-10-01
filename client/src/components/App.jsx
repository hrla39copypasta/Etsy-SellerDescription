import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Seller from './Seller.jsx';
import ProductGrid from './ProductGrid.jsx';

const Body = styled.div`
background-color: #F8EBE6;
margin: 0;
font-family: 'Roboto', sans-serif;
font-weight: 300;
font-size: 13px;
`;

const Wrapper = styled.div`
max-width: 1400px;
background-color: #F8EBE6;
margin: 0 auto;
padding: 24px 30px 48px 30px;
display: grid;
grid-template-columns: 1fr 4fr;
grid-template-rows: 1fr;
gap: 0px 0px;
grid-template-areas:
  "seller items";
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seller: {},
      sellerProducts: [],
    };
    this.getSellers = this.getSellers.bind(this);
    this.getSellerProducts = this.getSellerProducts.bind(this);
  }

  componentDidMount() {
    this.getSellers();
    this.getSellerProducts();
  }

  // Get seller and seller store data
  getSellers() {
    axios.get('/api/seller/1')
      .then((result) => this.setState({
        seller: result.data[0],
      }))
      .catch((err) => console.error(err));
  }

  // Get all products on sale by seller
  getSellerProducts() {
    axios.get('/api/store/1')
      .then((result) => this.setState({
        sellerProducts: result.data,
      }))
      .catch((err) => console.error(err));
  }

  render() {
    const { seller, sellerProducts } = this.state;
    return (
      <Body>
        <Wrapper>
          <Seller seller={seller} />
          <ProductGrid sellerProducts={sellerProducts} />
        </Wrapper>
      </Body>
    );
  }
}
