import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import { FaHandPaper, FaTruck, FaBox } from 'react-icons/fa';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;

  p:last-child {
    margin: 6px auto 0 auto;
  }

  .sd_ship_icon {
    background-color: #EAEAEA;
    padding: 4px;
    border-radius: 50%;
  }

  .sd_ship_date {
    font-weight: 400;
    margin: 12 auto 0 auto;
  }


  .sd_ships {
    text-align: center;
  }

  .sd_delivered {
    text-align: right;
  }
`;

const DeliveryBox = styled.div`
  width: 33%;

  .sd_icon_line {
    display: flex;
  }

  .sd_left_line {
    left: 2px;
  }

  .sd_right_line {
    right: 2px;
  }
`;

const HorizontalLine = styled.div`
  width: ${(props) => props.width}%;


  border-top: 2px solid black;
  position: relative;
  top: 10px;

`;

const DeliveryTimeline = () => (
  <Wrapper>
    <ReactTooltip
      id="sd_deliverytimeline"
      effect="solid"
      multiline="true"
      backgroundColor="white"
      textColor="black"
      place="bottom"
      border="true"
      borderColor="black"
    />
    <DeliveryBox
      data-for="sd_deliverytimeline"
      data-tip="After you place your order, <br/> VanWoof will take 2-7 business <br/> days to prepare it for shipment."
    >
      <div className="sd_icon_line">
        <FaHandPaper className="sd_ship_icon" />
        <HorizontalLine width="100" className="sd_left_line" />
      </div>
      <p className="sd_ship_date">Oct 2</p>
      <p className="sd_dotted_text">Order placed</p>
    </DeliveryBox>

    <DeliveryBox
      data-for="sd_deliverytimeline"
      className="sd_ships"
      data-tip="VanWoof puts your order in the mail."
    >
      <div className="sd_icon_line">
        <HorizontalLine width="45" />
        <FaTruck className="sd_ship_icon" />
        <HorizontalLine width="45" />
      </div>
      <p className="sd_ship_date">Oct 6-14</p>
      <p className="sd_dotted_text">Order Ships</p>
    </DeliveryBox>

    <DeliveryBox
      data-for="sd_deliverytimeline"
      className="sd_delivered"
      data-tip="Estimated to arrive <br/>at your doorstep Oct 7-20!"
    >
      <div className="sd_icon_line">
        <HorizontalLine width="100" className="sd_right_line" />
        <FaBox className="sd_ship_icon" />
      </div>
      <p className="sd_ship_date">Oct 7-20</p>
      <p className="sd_dotted_text">Delivered!</p>
    </DeliveryBox>
  </Wrapper>
);

export default DeliveryTimeline;