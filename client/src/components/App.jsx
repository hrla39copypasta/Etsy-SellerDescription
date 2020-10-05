import React, { Component } from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import DeliveryTimeline from './DeliveryTimeline.jsx';
import DeliverToCountry from './DeliverToCountry.jsx';
import PoliciesBtn from './PoliciesBtn.jsx';
import SellerInfo from './SellerInfo.jsx';

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  font-weight: 300;
  max-width: 1024px;
  margin: 0 auto;

  .sd_dotted_text {
    border-bottom: 2px dotted black;
    display: inline-block;
  }
`;

const EstimatedArrival = styled.div`
  p:first-child {
    margin: 0 auto;
    cursor: help;
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

const PopupBubble = styled.span`
  width: 250px;
  display: block;
  border: 1px solid red;
  position: absolute;
  z-index: 10;
  background-color: white;
  left: 150px;
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
        <ReactTooltip
          // Estimated Arrival Tooltip
          id="sd_estimatedArrival"
          effect="solid"
          multiline="true"
          backgroundColor="white"
          textColor="black"
          place="bottom"
          offset="{'right': 175}"
          border="true"
          borderColor="black"
        />
        {/* Estimated arrival */}
        <EstimatedArrival>
          <p
            data-tip="This is an estimate based on purchase date,<br/> the seller's locationand processing time,<br/>
            and the shipping destination and carrier.
            <br/>
            Other factors—like placing an order on a <br/> weekend or a holiday—may push the arrival <br/> of your item beyond this date."
            className="sd_dotted_text"
            data-for="sd_estimatedArrival"
          >
            Estimated Arrival
          </p>
          <p>Oct 7-20</p>
        </EstimatedArrival>

        {/* Delivery Time line */}
        <DeliveryTimeline />

        <ShippingInfo>
          <div>
            <p data-tip="asdfsf">Cost to ship</p>
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
