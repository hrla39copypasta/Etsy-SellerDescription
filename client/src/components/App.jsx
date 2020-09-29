import React, { Component } from 'react';
import styled from 'styled-components';

import axios from 'axios';

const Wrapper = styled.div`
max-width: 1400px;
background-color: #F8EBE6;
margin: 0 auto;
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
      <Wrapper className="hi">
        <h1>hi</h1>
        <h2>hello</h2>
        <button className="test" type="submit">PUSH ME</button>
      </Wrapper>
    );
  }
}
