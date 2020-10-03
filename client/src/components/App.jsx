import React, { Component } from 'react';
import styled from 'styled-components';
import DeliveryTimeline from './DeliveryTimeline.jsx';
import DeliverToCountry from './DeliverToCountry.jsx';
import PoliciesBtn from './PoliciesBtn.jsx';
import SellerInfo from './SellerInfo.jsx';

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  font-weight: 300;
  width: 500px;
  margin: 0 auto;

  .sd_dotted_text {
    border-bottom: 1px dotted black;
    display: inline-block;
  }
`;

const EstimatedArrival = styled.div`
  p:first-child {
    margin: 0 auto;
  }

  p:last-child {
    font-size: 24px;
    margin: 6px auto;
  }
`;

const ShippingInfo = styled.div`
  display: flex;

  div {
    width: 50%;
  }

  div > p:nth-child(2) {
    font-size: 24px;
    margin: 0;
  }
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Container>
        {/* Estimated arrival */}
        <EstimatedArrival>
          <p className="dotted_text">Estimated Arrival</p>
          <p>Oct 7-20</p>
        </EstimatedArrival>

        {/* Delivery Time line */}
        <DeliveryTimeline />

        <ShippingInfo>
          <div>
            <p>Cost to ship</p>
            <p>Free</p>
          </div>
          <div>
            <p>Returns & exchanges</p>
            <p>Accepted</p>
            <span>Exceptions may apply</span>
          </div>
        </ShippingInfo>

        <DeliverToCountry />

        {/* View Shop Policies */}
        <PoliciesBtn />

        {/* Meet your seller */}
        <SellerInfo />
      </Container>
    );
  }
}
