import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Seller from './Seller.jsx';
import ProductGrid from './ProductGrid.jsx';

const Wrapper = styled.div`
max-width: 1400px;
background-color: #F8EBE6;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 3fr;
grid-template-rows: 1fr;
gap: 0px 0px;
grid-template-areas:
  "seller items";
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seller: [],
      sellerProducts: [],
    };
    this.getSellers = this.getSellers.bind(this);
    this.getSellerProducts = this.getSellerProducts.bind(this);
  }

  componentDidMount() {
    this.getSellers();
    this.getSellerProducts();
  }

  getSellers() {
    axios.get('/api/seller/1')
      .then((result) => this.setState({
        seller: result.data,
      }))
      .catch((err) => console.error(err));
  }

  getSellerProducts() {
    axios.get('/api/store/1')
      .then((result) => this.setState({
        sellerProducts: result.data,
      }))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <Wrapper>
        <Seller />
        <ProductGrid />
      </Wrapper>
    );
  }
}
